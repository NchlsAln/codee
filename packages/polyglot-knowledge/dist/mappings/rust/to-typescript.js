"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToTypeScriptRules = void 0;
exports.rustToTypeScript = rustToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "typescript");
function rustToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "typescript", code);
}
exports.rustToTypeScriptRules = rules;
