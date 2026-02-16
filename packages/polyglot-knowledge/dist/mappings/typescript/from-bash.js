"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToTypeScriptRules = void 0;
exports.bashToTypeScript = bashToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "typescript");
function bashToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "typescript", code);
}
exports.bashToTypeScriptRules = rules;
