import {execSync} from "child_process";
import {readFileSync, writeFileSync} from "fs";
import {updateDeps} from './update-deps';

const packageName = process.argv.pop();

if (!packageName) {
  throw new Error('Missing package name.');
}
const projectName = `${packageName}-ngcc`.replace(/\-\d+\-/, '2').replace(/[^A-Za-z0-9-]/, '');
execSync(`./node_modules/.bin/ng new ${projectName} --enable-ivy --defaults=true --skip-install`, {
  stdio: 'inherit'
});

console.log(`Updating Angular dependencies...`);
updateDeps(projectName);

console.log('Disabling differential loading for faster builds');
const tsConfigJsonPath = `${projectName}/tsconfig.json`;
const tsconfig = JSON.parse(readFileSync(tsConfigJsonPath).toString());
tsconfig.compilerOptions.target = 'es5';
writeFileSync(tsConfigJsonPath, JSON.stringify(tsconfig, null, 2));

console.log('Installing npm dependencies');
execSync(`npm i -C ${projectName}`, {
  stdio: 'inherit'
});