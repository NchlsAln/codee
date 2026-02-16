"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
  constructor() {
    super("puppet", {
      systemPrompt:
        "You are a Puppet expert. Emphasize declarative resources, Hiera data separation, and catalog hygiene.",
      fewShotExamples: [
        {
          task: "Package",
          input: "install nginx",
          output: "package { 'nginx': ensure => installed }",
        },
        {
          task: "Service",
          input: "enable service",
          output: "service { 'nginx': ensure => running, enable => true }",
        },
      ],
      contextHints: [
        "Keep catalogs small to reduce compile time.",
        "Use Hiera for environment-specific data.",
        "Declare dependencies with require/before.",
        "Avoid direct file edits; use templates.",
        "Prefer modules for reuse.",
      ],
    });
  }
}
exports.PromptEngineering = PromptEngineering;
