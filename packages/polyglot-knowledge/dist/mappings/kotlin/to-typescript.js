"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToTypeScriptRules = void 0;
exports.kotlinToTypeScript = kotlinToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "typescript");
function kotlinToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "typescript", code);
}
exports.kotlinToTypeScriptRules = rules;
