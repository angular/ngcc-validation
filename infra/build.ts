import * as chalk from 'chalk';
import { existsSync } from 'fs';
import { join } from 'path';
import { Worker } from 'worker_threads';
import { argv } from 'yargs';

import { projects } from '../angular.json';
import * as failingProjectsJson from './failing-projects.json';

const allProjectNames = Object.keys(projects).sort();
const failingProjectsList = failingProjectsJson[argv.target as keyof typeof failingProjectsJson];
const failingProjects = new Set(failingProjectsList);

interface Output {
  project: string;
  message: {
    success: boolean;
    out: string;
  };
}

const getTestCommand = (project: string) => {
  const customTestScript = `projects/${project}/custom-test.js`;

  return existsSync(customTestScript) ?
    `node ${customTestScript}` :
    `npm run ng -- e2e ${project} --no-webdriver-update`;
};

class BuilderPool {
  private _active = 0;
  private _queue: string[] = [];
  private _outputs: Output[] = [];

  constructor(private _size: number) {}

  schedule(project: string) {
    console.log(chalk.gray('Scheduling: ' + project));
    this._queue.push(project);
    if (this._active >= this._size - 1) {
      return;
    }
    this._next();
  }

  private _next() {
    const project = this._queue.shift();
    if (!project) {
      if (!this._active) {
        this._report();
      }
      return;
    }
    console.log(chalk.gray('Executing: ' + project));
    const worker = new Worker(join(__dirname, 'build-project.js'), {
      workerData: getTestCommand(project)
    });
    this._active++;
    worker.on('message', message => {
      this._outputs.push({
        project,
        message
      });
      console.log(
        'Execution of',
        project,
        message.success ? chalk.green('successful') : chalk.red('failed')
      );
    });
    worker.on('exit', () => {
      this._active--;
      this._next();
    });
    worker.on('error', err => {
      console.error(err);
      this._active--;
      this._next();
    });
  }

  private _report() {
    const output = this._outputs.sort((a, b) => {
      const ares = +a.message.success;
      const bres = +b.message.success;
      return bres - ares;
    });
    let result = '';
    let totalSuccess = 0;
    const regressed: string[] = [];
    const newPasses: string[] = [];

    output.forEach(row => {
      if (row.message.success) totalSuccess += 1;
      if (failingProjects.has(row.project) && row.message.success) {
        newPasses.push(row.project);
      } else if (!failingProjects.has(row.project) && !row.message.success) {
        regressed.push(row.project);
      }
      result += chalk.yellow('### ' + row.project + ' ###') + '\n';
      result +=
        'Status: ' +
        (row.message.success ? chalk.green('Tests passed') : chalk.red('Tests failed')) +
        '\n\n';
      result += row.message.success
        ? row.message.out
        : chalk.red(row.message.out);
      result += '\n\n';
    });

    console.log('\n');
    console.log(result);
    console.log(
      `Total: ${output.length}, ${chalk.green(
        'Success: ' + totalSuccess
      )}, ${chalk.red('Failed: ' + (output.length - totalSuccess))}`
    );

    if (regressed.length) {
      console.log(chalk.red('Regressions: ' + regressed.join(', ')));
    }
    if (newPasses.length) {
      console.log(chalk.green('New successes: ' + newPasses.join(', ')));
      console.log(' (Please remove these projects from \'failing-projects.json\'.)');
    }

    // Additionally, ensure `failingProjectsList` does not contain non-existent projects.
    const nonExistentFailingProjects =
      failingProjectsList.filter(name => !allProjectNames.includes(name));
    if (nonExistentFailingProjects.length > 0) {
      console.log(chalk.red(
        `\'failing-projects.json\' contains ${nonExistentFailingProjects.length} non-existent project(s): ` +
        nonExistentFailingProjects.join(', ')));
    }

    process.exit((regressed.length + newPasses.length + nonExistentFailingProjects.length > 0) ? 1 : 0);
  }
}

const pool = new BuilderPool(2);

let shardProjectNames = allProjectNames;
if (argv.shard !== undefined) {
  const shardId = argv.shard as string | number;
  // Remove tests that are not part of this shard.
  const nbShards = (argv['nb-shards'] || 2) as string | number;
  shardProjectNames = allProjectNames.filter((name, i) => i % +nbShards === +shardId);
}

shardProjectNames.forEach(dir => pool.schedule(dir));
