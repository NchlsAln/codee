"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToPowerShellRules = void 0;
exports.terraformToPowerShell = terraformToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "powershell");
function terraformToPowerShell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "powershell", code);
}
exports.terraformToPowerShellRules = rules;
