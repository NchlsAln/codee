"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToKotlinRules = void 0;
exports.nimToKotlin = nimToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "kotlin");
function nimToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "kotlin", code);
}
exports.nimToKotlinRules = rules;
