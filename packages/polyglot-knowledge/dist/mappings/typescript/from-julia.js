"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToTypeScriptRules = void 0;
exports.juliaToTypeScript = juliaToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "typescript");
function juliaToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "typescript", code);
}
exports.juliaToTypeScriptRules = rules;
