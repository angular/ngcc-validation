const { parentPort, workerData, isMainThread } = require("worker_threads");
const { execSync } = require('child_process');

if (!isMainThread) {
  if (typeof workerData !== 'string') {
    throw new Error("workerData must be a string");
  }
  try {
    // todo: the below should be npm ci instead of npm i, so that we use frozen lock files
    // However currently the lock files are outdated and we need to update them.
    const res = execSync(`npm run ng -- build ${workerData} --noSourceMap --noProgress`, { stdio: 'pipe' });
    parentPort.postMessage({
      success: true,
      out: res.toString()
    });
  } catch (e) {
    parentPort.postMessage({
      success: false,
      out: e.stderr.toString()
    });
  }
}
