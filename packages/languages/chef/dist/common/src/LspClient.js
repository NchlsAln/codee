"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LspClient = void 0;
const child_process_1 = require("child_process");
class LspClient {
  process;
  start(command, args, cwd) {
    if (this.process) {
      return;
    }
    if (process.env.NODE_ENV === "test" || process.env.CODEE_DISABLE_LSP_SPAWN === "1") {
      return;
    }
    this.process = (0, child_process_1.spawn)(command, args, {
      cwd,
      stdio: "pipe",
    });
  }
  stop() {
    if (!this.process) {
      return;
    }
    this.process.kill();
    this.process = undefined;
  }
}
exports.LspClient = LspClient;
