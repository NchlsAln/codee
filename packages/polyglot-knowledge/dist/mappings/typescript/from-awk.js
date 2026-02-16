"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToTypeScriptRules = void 0;
exports.awkToTypeScript = awkToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "typescript");
function awkToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "typescript", code);
}
exports.awkToTypeScriptRules = rules;
