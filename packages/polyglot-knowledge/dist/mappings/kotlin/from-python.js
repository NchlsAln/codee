"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToKotlinRules = void 0;
exports.pythonToKotlin = pythonToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "kotlin");
function pythonToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "kotlin", code);
}
exports.pythonToKotlinRules = rules;
