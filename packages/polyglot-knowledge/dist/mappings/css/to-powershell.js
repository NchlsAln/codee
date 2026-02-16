"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToPowerShellRules = void 0;
exports.cssToPowerShell = cssToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "powershell");
function cssToPowerShell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "powershell", code);
}
exports.cssToPowerShellRules = rules;
