import {execSync} from "child_process";
import {resolve} from "path";
import {readdirSync, statSync} from "fs";
import {updateDeps} from './update-deps';

/**
 * Run this script when you want to update the Angular dependencies
 * that are overriding the default ones originally provided by the CLI
 * in each sub-project.
 *
 * The overridden dependencies are specified in the `update-deps.ts` file.
 */

const ignore = new Set([
  'infra',
  'node_modules',
  '.git',
  '.',
  '..',
  '.circleci'
]);

const projects = readdirSync('.').filter(
  (dir: string) => !ignore.has(dir) && dir.endsWith('-ngcc') && statSync(dir).isDirectory()
);
console.log('Updating Angular dependencies for all the projects');
projects.forEach(project => {
  updateDeps(project);
  execSync(`cd ${resolve(__dirname, '..', project)} && npm i --package-lock-only`, {
    stdio: 'inherit'
  });
});
