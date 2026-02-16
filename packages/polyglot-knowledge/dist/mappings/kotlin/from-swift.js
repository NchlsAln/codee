"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToKotlinRules = void 0;
exports.swiftToKotlin = swiftToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "kotlin");
function swiftToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "kotlin", code);
}
exports.swiftToKotlinRules = rules;
