const { execSync } = require('child_process');
const { isMainThread, parentPort, workerData } = require('worker_threads');

if (!isMainThread) {
  if (typeof workerData !== 'string') {
    throw new Error('workerData must be a string');
  }
  try {
    const res = runCmd(workerData);
    parentPort.postMessage({
      success: true,
      out: res.toString()
    });
  } catch (e) {
    parentPort.postMessage({
      success: false,
      out: `stderr: ${e.stderr.toString()}\nstdout: ${e.stdout.toString()}\n`
    });
  }
}

// Helpers
function runCmd(cmd, retryAttempts = 1) {
  try {
    return execSync(cmd, { stdio: 'pipe' });
  } catch (err) {
    if (retryAttempts > 0) {
      console.log(`Retrying command '${cmd}'...`);
      return runCmd(cmd, retryAttempts - 1);
    } else {
      throw err;
    }
  }
}
