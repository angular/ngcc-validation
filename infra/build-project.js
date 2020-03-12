const { parentPort, workerData, isMainThread } = require("worker_threads");
const { execSync } = require('child_process');

if (!isMainThread) {
  if (typeof workerData !== 'string') {
    throw new Error('workerData must be a string');
  }
  try {
    const res = execSync(workerData, { stdio: 'pipe' });
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
