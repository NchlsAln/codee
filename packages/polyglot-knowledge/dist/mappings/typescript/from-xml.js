"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToTypeScriptRules = void 0;
exports.xmlToTypeScript = xmlToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "typescript");
function xmlToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "typescript", code);
}
exports.xmlToTypeScriptRules = rules;
