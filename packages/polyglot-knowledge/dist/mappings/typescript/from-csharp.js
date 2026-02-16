"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToTypeScriptRules = void 0;
exports.csharpToTypeScript = csharpToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "typescript");
function csharpToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "typescript", code);
}
exports.csharpToTypeScriptRules = rules;
