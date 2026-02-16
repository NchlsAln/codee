"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToTypeScriptRules = void 0;
exports.htmlToTypeScript = htmlToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "typescript");
function htmlToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "typescript", code);
}
exports.htmlToTypeScriptRules = rules;
