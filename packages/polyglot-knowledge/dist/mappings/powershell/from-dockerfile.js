"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToPowerShellRules = void 0;
exports.dockerfileToPowerShell = dockerfileToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "powershell");
function dockerfileToPowerShell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "powershell", code);
}
exports.dockerfileToPowerShellRules = rules;
