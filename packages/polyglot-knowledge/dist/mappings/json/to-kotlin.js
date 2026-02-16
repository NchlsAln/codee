"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToKotlinRules = void 0;
exports.jsonToKotlin = jsonToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "kotlin");
function jsonToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "kotlin", code);
}
exports.jsonToKotlinRules = rules;
