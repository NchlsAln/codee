"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLanguageServer = void 0;
const events_1 = require("events");
const LspClient_1 = require("./LspClient");
class BaseLanguageServer extends events_1.EventEmitter {
  options;
  client = new LspClient_1.LspClient();
  status = { state: "stopped" };
  constructor(options) {
    super();
    this.options = options;
  }
  getLanguageId() {
    return this.options.languageId;
  }
  getProjectPath() {
    return this.options.projectPath;
  }
  async start() {
    if (this.status.state === "running") {
      return;
    }
    this.status = { state: "starting" };
    try {
      this.client.start(this.options.command, this.options.args, this.options.projectPath);
      this.status = { state: "running" };
    } catch (error) {
      this.status = { state: "error", message: error.message };
      throw error;
    }
  }
  async stop() {
    this.client.stop();
    this.status = { state: "stopped" };
  }
  async restart() {
    await this.stop();
    await this.start();
  }
  getStatus() {
    return this.status;
  }
  async getDiagnostics() {
    return [];
  }
  async getHover() {
    return null;
  }
  async getCompletions() {
    return [];
  }
  async getDefinition() {
    return null;
  }
}
exports.BaseLanguageServer = BaseLanguageServer;
