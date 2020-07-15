const {execSync} = require('child_process');
const {basename} = require('path');


const projectName = basename(__dirname);

process.chdir(`${__dirname}/../..`);
run(`npm run ng -- build ${projectName} --noSourceMap --noProgress`);


// Helpers
function run(cmd, opts = {}) {
  return execSync(cmd, {shell: true, stdio: 'inherit', ...opts});
}
