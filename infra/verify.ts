import * as ts from 'typescript';

import {CachedFileSystem, NodeJSFileSystem} from '@angular/compiler-cli/src/ngtsc/file_system';
import {verifyCompiledDirectory} from './verification';

const fs = new CachedFileSystem(new NodeJSFileSystem());

const nodeModulesPath = fs.resolve(__dirname, '..', 'node_modules');
const result = verifyCompiledDirectory(nodeModulesPath, fs);

for (const unprocessed of result.unprocessed) {
  const sf = unprocessed.node.getSourceFile();
  const {line, character} = ts.getLineAndCharacterOfPosition(sf, unprocessed.node.getStart());
  console.warn(`${sf.fileName}@${line}:${character}: ${unprocessed.reason}`);
}
