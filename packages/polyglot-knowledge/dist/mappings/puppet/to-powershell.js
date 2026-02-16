"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToPowerShellRules = void 0;
exports.puppetToPowerShell = puppetToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "powershell");
function puppetToPowerShell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "powershell", code);
}
exports.puppetToPowerShellRules = rules;
