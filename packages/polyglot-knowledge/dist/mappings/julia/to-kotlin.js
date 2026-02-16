"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToKotlinRules = void 0;
exports.juliaToKotlin = juliaToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "kotlin");
function juliaToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "kotlin", code);
}
exports.juliaToKotlinRules = rules;
