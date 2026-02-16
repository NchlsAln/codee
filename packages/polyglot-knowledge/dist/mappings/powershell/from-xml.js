"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToPowerShellRules = void 0;
exports.xmlToPowerShell = xmlToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "powershell");
function xmlToPowerShell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "powershell", code);
}
exports.xmlToPowerShellRules = rules;
