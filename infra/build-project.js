const { parentPort, workerData, isMainThread } = require("worker_threads");
const { execSync } = require('child_process');

if (!isMainThread) {
  if (typeof workerData !== 'string') {
    throw new Error("workerData must be a string");
  }
  try {
    const res = execSync(`cd ${workerData} && npm i && ./node_modules/.bin/ng build`, { stdio: 'pipe' });
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
