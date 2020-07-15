const {exec, execSync} = require('child_process');
const {readFileSync} = require('fs');
const {basename} = require('path');


const projectName = basename(__dirname);
const generatedIndexPath = `dist/${projectName}/browser/index.html`;
const expectedIndexContent = `Welcome to ${projectName}!`;

process.chdir(`${__dirname}/../..`);

// Build the app and prerender `index.html` with SSR.
// (This causes `@angular/platform-server` to be processed by ngcc.)
run(`yarn ${projectName}:prerender`);

// Verify that the generated `index.html` is pre-populated with the correct content.
// (This ensures that prerendering works correctly.)
const generatedIndexContent = readFileSync(generatedIndexPath, 'utf8');
if (generatedIndexContent.includes(expectedIndexContent)) {
  console.log('\'index.html\' prerendered correctly.');
} else {
  throw new Error(`Expected '${generatedIndexPath}' to contain '${expectedIndexContent}'.`);
}

// Run the e2e tests using the SSR server.
// (This ensures that the server responds successfully and that client-side bootstrapping works
// correctly.)
const serverProc = runInBackground(`yarn ${projectName}:serve:ssr`);
try {
  const protractorConfig = `projects/${projectName}/e2e/protractor.conf.js`;
  run(`yarn protractor ${protractorConfig} --baseUrl http://localhost:4000/`);
} finally {
  serverProc.kill();
}

// For some reason, the script does not exit on successful completion.
process.exit();


// Helpers
function run(cmd, opts = {}) {
  return execSync(cmd, {shell: true, stdio: 'inherit', ...opts});
}

function runInBackground(cmd, opts = {}) {
  return exec(cmd, {shell: true, stdio: 'inherit', ...opts});
}
