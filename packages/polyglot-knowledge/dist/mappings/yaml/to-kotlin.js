"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToKotlinRules = void 0;
exports.yamlToKotlin = yamlToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "kotlin");
function yamlToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "kotlin", code);
}
exports.yamlToKotlinRules = rules;
