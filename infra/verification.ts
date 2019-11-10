/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as ts from 'typescript';
import {AbsoluteFsPath, FileSystem} from '@angular/compiler-cli/src/ngtsc/file_system';

const PROBLEMATIC = [
  'Component',
  'Directive',
  'Injectable',
  'NgModule',
  'Pipe',
];

export interface VerificationResult {
  unprocessed: UnprocessedDecorator[];
}

export interface UnprocessedDecorator {
  node: ts.Node;
  reason: string;
}

export function verifyCompiledDirectory(directory: AbsoluteFsPath, fileSystem: FileSystem): VerificationResult {
  const unprocessed: UnprocessedDecorator[] = [];
  for (const jsFile of collectJsFiles(directory, fileSystem)) {
    const contents = fileSystem.readFile(jsFile);
    const sf =
      ts.createSourceFile(jsFile, contents, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
    visitNode(sf);
  }
  return {unprocessed};

  function visitNode(node: ts.Node): void {
    if (ts.isCallExpression(node) && isDunderDecorate(node.expression)) {
      const inspection = inspectDunderDecorate(node);
      if (inspection !== null) {
        unprocessed.push(inspection);
      }
    }

    if (isDecoratorsAssignment(node)) {
      const inspection = inspectDecoratorsAssignment(node);
      if (inspection !== null) {
        unprocessed.push(inspection);
      }
    }

    ts.forEachChild(node, visitNode);
  }
}

function isDunderDecorate(node: ts.Expression): boolean {
  if (ts.isIdentifier(node) && node.text === '__decorate') {
    return true;
  } else if (ts.isPropertyAccessExpression(node) && node.name.text === '__decorate') {
    return true;
  } else {
    return false;
  }
}

function inspectDunderDecorate(node: ts.CallExpression): UnprocessedDecorator|null {
  if (node.arguments.length === 0) {
    return null;
  }
  const decorateArgs = node.arguments[0];
  if (!ts.isArrayLiteralExpression(decorateArgs)) {
    return null;
  }

  for (const element of decorateArgs.elements) {
    if (!ts.isCallExpression(element)) {
      continue;
    }
    if (/jit:\s*true/.test(element.getText())) {
      continue;
    }
    const called = element.expression.getText();
    for (const problem of PROBLEMATIC) {
      if (called.indexOf(problem) !== -1) {
        return {node, reason: `unprocessed __decorate call found: ${problem}`};
      }
    }
  }

  return null;
}

function isDecoratorsAssignment(node: ts.Node): node is ts.BinaryExpression {
  if (!ts.isBinaryExpression(node) || node.operatorToken.kind !== ts.SyntaxKind.EqualsToken) {
    return false;
  }

  if (!ts.isPropertyAccessExpression(node.left) || !ts.isArrayLiteralExpression(node.right)) {
    return false;
  }

  const property = node.left.expression;
  if (!ts.isIdentifier(property)) {
    return false;
  }

  return property.text !== 'decorators';
}

function inspectDecoratorsAssignment(node: ts.BinaryExpression): UnprocessedDecorator|null {
  const decorateArgs = node.right;
  if (!ts.isArrayLiteralExpression(decorateArgs)) {
    return null;
  }

  for (const element of decorateArgs.elements) {
    if (!ts.isObjectLiteralExpression(element)) {
      continue;
    }
    if (/jit:\s*true/.test(element.getText())) {
      continue;
    }
    // const typeProp = element.properties.find(p => ts.isPropertyAssignment(p) &&
    // ts.isIdentifier(p.name) && p.name.text === 'type');
    // if (typeProp === undefined) {
    //   continue;
    // }
    // const type = typeProp.getText();
    const text = element.getText();
    for (const problem of PROBLEMATIC) {
      if (text.indexOf(problem) !== -1) {
        return {node, reason: `unprocessed decorators assignment found: ${problem}`};
      }
    }
  }

  return null;
}

function collectJsFiles(dir: AbsoluteFsPath, fileSystem: FileSystem): AbsoluteFsPath[] {
  const jsFiles: AbsoluteFsPath[] = [];
  for (const file of fileSystem.readdir(dir)) {
    const properPath = fileSystem.join(dir, file);
    if (file.endsWith('.js')) {
      jsFiles.push(properPath);
    }
    if (fileSystem.stat(properPath).isDirectory()) {
      jsFiles.push(...collectJsFiles(properPath, fileSystem));
    }
  }
  return jsFiles;
}
