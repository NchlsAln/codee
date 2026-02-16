"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToPowerShellRules = void 0;
exports.ansibleToPowerShell = ansibleToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "powershell");
function ansibleToPowerShell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "powershell", code);
}
exports.ansibleToPowerShellRules = rules;
