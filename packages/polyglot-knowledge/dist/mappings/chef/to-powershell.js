"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToPowerShellRules = void 0;
exports.chefToPowerShell = chefToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "powershell");
function chefToPowerShell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "powershell", code);
}
exports.chefToPowerShellRules = rules;
