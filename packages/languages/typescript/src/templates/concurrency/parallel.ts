export function parallelTemplate(): string {
  return [
    "import { Worker } from 'node:worker_threads';",
    "",
    "const worker = new Worker(`const { parentPort } = require('node:worker_threads');\nparentPort.postMessage(21 * 2);`, { eval: true });",
    "worker.on('message', (value) => console.log(value));"
  ].join("\n");
}
