"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePromptEngineering = void 0;
class BasePromptEngineering {
  languageId;
  config;
  constructor(languageId, config) {
    this.languageId = languageId;
    this.config = config;
  }
  getSystemPrompt() {
    return this.config.systemPrompt;
  }
  getFewShotExamples() {
    return this.config.fewShotExamples;
  }
  buildPrompt(context, taskHint) {
    const taskLine = taskHint ? `Task: ${taskHint}` : "";
    const hints = this.config.contextHints.join("\n");
    return [this.config.systemPrompt, taskLine, hints, context].filter(Boolean).join("\n\n");
  }
}
exports.BasePromptEngineering = BasePromptEngineering;
