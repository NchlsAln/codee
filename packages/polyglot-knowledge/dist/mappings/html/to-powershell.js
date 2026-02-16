"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToPowerShellRules = void 0;
exports.htmlToPowerShell = htmlToPowerShell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "powershell");
function htmlToPowerShell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "powershell", code);
}
exports.htmlToPowerShellRules = rules;
