"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToTypeScriptRules = void 0;
exports.scssToTypeScript = scssToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "typescript");
function scssToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "typescript", code);
}
exports.scssToTypeScriptRules = rules;
