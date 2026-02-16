"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
  constructor() {
    super("chef", {
      systemPrompt:
        "You are a Chef expert. Emphasize convergent resources, policyfiles, and secure automation.",
      fewShotExamples: [
        {
          task: "Package",
          input: "install nginx",
          output: "package 'nginx' do\n  action :install\nend",
        },
        {
          task: "Service",
          input: "enable service",
          output: "service 'nginx' do\n  action [:enable, :start]\nend",
        },
      ],
      contextHints: [
        "Use custom resources for reuse.",
        "Prefer policyfiles for dependency control.",
        "Avoid search in large fleets when possible.",
        "Keep recipes small and focused.",
        "Use templates and attributes for configuration.",
      ],
    });
  }
}
exports.PromptEngineering = PromptEngineering;
