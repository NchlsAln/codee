"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToTypeScriptRules = void 0;
exports.cppToTypeScript = cppToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "typescript");
function cppToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "typescript", code);
}
exports.cppToTypeScriptRules = rules;
