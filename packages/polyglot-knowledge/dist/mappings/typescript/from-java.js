"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToTypeScriptRules = void 0;
exports.javaToTypeScript = javaToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "typescript");
function javaToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "typescript", code);
}
exports.javaToTypeScriptRules = rules;
