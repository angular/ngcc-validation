import chalk from 'chalk';
import { join } from 'path';
import { Worker } from 'worker_threads';

import * as passingData from './passing.json';
import { projects } from '../angular.json';

const passing = new Set(passingData);

interface Output {
  project: string;
  message: {
    success: boolean;
    out: string;
  };
}

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
      workerData: project
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
      if (passing.has(row.project) && !row.message.success) {
        regressed.push(row.project);
      } else if (!passing.has(row.project) && row.message.success) {
        newPasses.push(row.project);
      }
      result += chalk.yellow('### ' + row.project + ' ###') + '\n';
      result +=
        'Status: ' +
        (row.message.success ? chalk.green('success') : chalk.red('failure')) +
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
    }
    process.exit(regressed.length > 0 ? 1 : 0);
  }
}

const pool = new BuilderPool(2);

Object.keys(projects).forEach(dir => pool.schedule(dir));
