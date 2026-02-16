"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToPowerShellRules = void 0;
exports.yamlToPowerShell = yamlToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "powershell");
function yamlToPowerShell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "powershell", code);
}
exports.yamlToPowerShellRules = rules;
