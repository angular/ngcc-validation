import { readdirSync, statSync } from 'fs';
import chalk from 'chalk';
import { join } from 'path';
import { Worker } from 'worker_threads';

const ignore = new Set([
  'infra',
  'node_modules',
  '.git',
  '.',
  '..',
  '.circleci'
]);

const all = readdirSync('.').filter(
  (dir: string) => !ignore.has(dir) && statSync(dir).isDirectory()
);

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
    worker.on('message', message =>
      this._outputs.push({
        project,
        message
      })
    );
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
    console.log('\n');
    let totalSuccess = 0;
    output.forEach(row => {
      if (row.message.success) totalSuccess += 1;
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
    console.log(result);
    console.log(
      `Total: ${output.length}, ${chalk.green(
        'Success: ' + totalSuccess
      )}, ${chalk.red('Failed: ' + (output.length - totalSuccess))}`
    );
  }
}

const pool = new BuilderPool(3);

all.forEach(dir => pool.schedule(dir));
