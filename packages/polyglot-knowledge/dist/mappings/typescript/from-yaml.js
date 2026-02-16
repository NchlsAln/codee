"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToTypeScriptRules = void 0;
exports.yamlToTypeScript = yamlToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "typescript");
function yamlToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "typescript", code);
}
exports.yamlToTypeScriptRules = rules;
