"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToKotlinRules = void 0;
exports.zigToKotlin = zigToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "kotlin");
function zigToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "kotlin", code);
}
exports.zigToKotlinRules = rules;
