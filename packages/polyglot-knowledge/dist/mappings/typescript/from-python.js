"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToTypeScriptRules = void 0;
exports.pythonToTypeScript = pythonToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "typescript");
function pythonToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "typescript", code);
}
exports.pythonToTypeScriptRules = rules;
