import * as ts from 'typescript';
import chalk from 'chalk';

import {AbsoluteFsPath, CachedFileSystem, FileSystem, NodeJSFileSystem, setFileSystem} from '@angular/compiler-cli/src/ngtsc/file_system';
import {mainNgcc} from '@angular/compiler-cli/ngcc/src/main';
import {UnprocessedDecorator, VerificationResult, verifyCompiledDirectory} from './verification';

const fileSystem = new CachedFileSystem(new NodeJSFileSystem());

const configFile = fileSystem.readFile(fileSystem.resolve(__dirname, '..', 'ngcc.config.js'));
const nodeModulesPath = fileSystem.resolve(__dirname, '..', 'node_modules');

for (const packageDir of fileSystem.readdir(nodeModulesPath)) {
  const path = fileSystem.resolve(nodeModulesPath, packageDir);
  if (!fileSystem.stat(path).isDirectory()) {
    continue;
  }

  try {
    const configDelegateFs = createConfigDelegateFs(fileSystem, fileSystem.resolve(nodeModulesPath, 'ngcc.config.js'));
    setFileSystem(configDelegateFs);
    mainNgcc({
      basePath: path,
      compileAllFormats: true,
      createNewEntryPointFormats: false,
      async: false,
    });

    const verificationResult = verifyCompiledDirectory(path, new NodeJSFileSystem());
    reportVerificationResult(verificationResult);
  } catch (e) {
    console.log(chalk.red(`Failed to compile ${packageDir}:`), e);
  }
}

function reportVerificationResult(result: VerificationResult): void {
  if (result.unprocessed.length === 0) {
    console.log(chalk.gray(`SUCCESS: No issues found for ${result.directory}`));
    return;
  }

  const nonminified: UnprocessedDecorator[] = [];
  const minified: UnprocessedDecorator[] = [];
  for (const unprocessed of result.unprocessed) {
    if (unprocessed.node.getSourceFile().fileName.endsWith('.min.js')) {
      minified.push(unprocessed);
    } else {
      nonminified.push(unprocessed);
    }
  }

  const status = nonminified.length === 0 ? 'SUCCESS, BUT WITH MINIFIED FAILURES' : 'FAILURE';

  console.log(chalk.yellow(`${status}: Found ${result.unprocessed.length} issues for ${result.directory}:`));
  for (const unprocessed of result.unprocessed) {
    const sf = unprocessed.node.getSourceFile();
    const {line, character} = ts.getLineAndCharacterOfPosition(sf, unprocessed.node.getStart());
    const message = `${sf.fileName}@${line + 1}:${character}: ${unprocessed.reason}`;

    if (sf.fileName.endsWith('.min.js')) {
      console.warn(chalk.cyan(message));
    } else {
      console.warn(chalk.cyanBright(message));
    }
  }
}

function createConfigDelegateFs(fileSystem: FileSystem, configFilePath: AbsoluteFsPath): FileSystem {
  const clone: FileSystem = Object.create(fileSystem);
  clone.exists = path => {
    if (path === configFilePath) {
      return true;
    }
    return fileSystem.exists(path);
  };
  clone.readFile = path => {
    if (path === configFilePath) {
      return configFile;
    }
    return fileSystem.readFile(path);
  };
  return clone;
}
