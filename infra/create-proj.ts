import {execSync} from "child_process";

const packageName = process.argv.pop();

if (!packageName) {
  throw new Error('Missing package name.');
}
const projectName = `${packageName}-ngcc`.replace(/\-\d+\-/, '2').replace(/[^A-Za-z0-9-]/, '');
execSync(`./node_modules/.bin/ng g app ${projectName} --enable-ivy --defaults --skip-install`, {
  stdio: 'inherit'
});
