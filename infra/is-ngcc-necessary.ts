import * as chalk from 'chalk';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const packages = Object.keys(JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8')).dependencies);
const knownNonNgccPackages = new Set<string>(JSON.parse(readFileSync(resolve(__dirname, './non-ngcc-packages.json'), 'utf8')));

console.log(chalk.gray('Checking for packages that no longer need ngcc processing'));

const nonNgccPackages = [];
for (const packageName of packages) {
  if (knownNonNgccPackages.has(packageName)) {
    continue;
  }
  const packagePath = resolve(__dirname, '../node_modules', packageName);
  const packageJson = JSON.parse(readFileSync(resolve(packagePath, 'package.json'), 'utf8'));
  const typingsPath = packageJson.typings || packageJson.types || guessTypingsFromPackageJson(packagePath, packageJson);

  if (!typingsPath) {
    continue;
  }

  const metadataPath = resolve(packagePath, typingsPath.replace(/\.d\.ts$/, '') + '.metadata.json');

  if (!existsSync(metadataPath)) {
    nonNgccPackages.push(packagePath);
  }
}

if (nonNgccPackages.length > 0) {
  console.error(chalk.red('The following packages no longer need to be processed by ngcc. Please remove them and the project that references them if appropriate.'));
  for (const packageName of nonNgccPackages) {
    console.error(`- ${packageName}`);
  }
  process.exit(1);
}

console.error(chalk.gray('No packages need to be removed.'));
process.exit(0);


// HELPERS COPIED FROM NGCC
function guessTypingsFromPackageJson(packagePath: string, packageJson: any) {
  const SUPPORTED_FORMAT_PROPERTIES = ['fesm2015', 'fesm5', 'es2015', 'esm2015', 'esm5', 'main', 'module', 'browser'];
  for (const prop of SUPPORTED_FORMAT_PROPERTIES) {
    const field = packageJson[prop];
    if (typeof field !== 'string') {
      continue;
    }
    const relativeTypingsPath = field.replace(/\.js$/, '.d.ts');
    const typingsPath = resolve(packagePath, relativeTypingsPath);
    if (existsSync(typingsPath)) {
      return typingsPath;
    }
  }
  return null;
}