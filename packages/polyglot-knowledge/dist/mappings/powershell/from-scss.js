"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToPowerShellRules = void 0;
exports.scssToPowerShell = scssToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "powershell");
function scssToPowerShell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "powershell", code);
}
exports.scssToPowerShellRules = rules;
