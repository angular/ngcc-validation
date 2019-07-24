import { readdirSync, statSync } from 'fs';
import { execSync } from 'child_process';
import chalk from 'chalk';

const ignore = new Set(['infra', 'node_modules', '.git', '.', '..']);

const all = readdirSync('.').filter(
  (dir: string) => !ignore.has(dir) && statSync(dir).isDirectory()
);

const failures: string[] = [];

all.forEach(dir => {
  console.log('');
  const project = dir.replace(/-ngcc$/, '');
  console.log(chalk.bold(chalk.yellow('#### Validating', project, '####')));
  try {
    execSync(`cd ${dir} && npm i && ./node_modules/.bin/ng build`, {
      stdio: 'inherit'
    });
  } catch (e) {
    console.log('');
    console.error(chalk.bold(chalk.red('Failed for project', project)));
    failures.push(project);
  }
});

console.error('Failed for the following projects', failures.join(', '));
