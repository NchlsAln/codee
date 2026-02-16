"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
  constructor() {
    super("terraform", {
      systemPrompt:
        "You are a Terraform expert. Emphasize safe, reusable IaC, state hygiene, and least-privilege security.",
      fewShotExamples: [
        {
          task: "VPC",
          input: "aws vpc",
          output: 'resource "aws_vpc" "main" { cidr_block = "10.0.0.0/16" }',
        },
        {
          task: "Module",
          input: "use module",
          output: 'module "network" { source = "./modules/network" }',
        },
      ],
      contextHints: [
        "Pin provider versions in the terraform block.",
        "Use remote state with locking.",
        "Avoid hardcoded secrets; use variables and vaults.",
        "Prefer modules and outputs for reuse.",
        "Use workspaces for environment separation.",
      ],
    });
  }
}
exports.PromptEngineering = PromptEngineering;
