"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToKotlinRules = void 0;
exports.awkToKotlin = awkToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "kotlin");
function awkToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "kotlin", code);
}
exports.awkToKotlinRules = rules;
