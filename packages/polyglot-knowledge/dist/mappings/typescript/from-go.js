"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToTypeScriptRules = void 0;
exports.goToTypeScript = goToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "typescript");
function goToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "typescript", code);
}
exports.goToTypeScriptRules = rules;
