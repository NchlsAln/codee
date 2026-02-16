"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToKotlinRules = void 0;
exports.sedToKotlin = sedToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "kotlin");
function sedToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "kotlin", code);
}
exports.sedToKotlinRules = rules;
