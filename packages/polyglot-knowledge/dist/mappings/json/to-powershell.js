"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToPowerShellRules = void 0;
exports.jsonToPowerShell = jsonToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "powershell");
function jsonToPowerShell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "powershell", code);
}
exports.jsonToPowerShellRules = rules;
