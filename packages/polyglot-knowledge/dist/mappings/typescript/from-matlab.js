"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToTypeScriptRules = void 0;
exports.matlabToTypeScript = matlabToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "typescript");
function matlabToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "typescript", code);
}
exports.matlabToTypeScriptRules = rules;
