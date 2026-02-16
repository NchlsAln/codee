"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToKotlinRules = void 0;
exports.xmlToKotlin = xmlToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "kotlin");
function xmlToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "kotlin", code);
}
exports.xmlToKotlinRules = rules;
