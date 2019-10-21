import {execSync} from 'child_process';
import {readFileSync, writeFileSync} from 'fs';

const NG_EXEC = `${__dirname}/../node_modules/.bin/ng`;
const NG_JSON_PATH = `${__dirname}/../angular.json`;

// The first two args will be the paths to `ts-node` and this script.
const packageName = process.argv[2] || '';
const projectName = `${packageName.replace(/-(\d+-)/g, '$1').replace(/[^A-Za-z0-9-]/g, '')}-ngcc`;

if (!packageName) {
  throw new Error('Missing package name.');
}

// Generate the app.
execSync(`${NG_EXEC} generate app ${projectName} --defaults --skip-install`, {stdio: 'inherit'});

// Sort `angular.json > projects` alphabetically.
const ngJson = JSON.parse(readFileSync(NG_JSON_PATH, 'utf8'));
ngJson.projects = sortKeys(ngJson.projects);
writeFileSync(NG_JSON_PATH, `${JSON.stringify(ngJson, null, 2)}\n`);

// Helpers
function sortKeys<T extends {[key: string]: unknown}>(obj: T): T {
  const sortedObj = {} as T;

  for (const key of Object.keys(obj).sort() as (keyof T)[]) {
    sortedObj[key] = obj[key];
  }

  return sortedObj;
}
