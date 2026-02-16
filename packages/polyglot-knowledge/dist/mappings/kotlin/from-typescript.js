"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToKotlinRules = void 0;
exports.typescriptToKotlin = typescriptToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "kotlin");
function typescriptToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "kotlin", code);
}
exports.typescriptToKotlinRules = rules;
