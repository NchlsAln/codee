"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToTypeScriptRules = void 0;
exports.crystalToTypeScript = crystalToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "typescript");
function crystalToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "typescript", code);
}
exports.crystalToTypeScriptRules = rules;
