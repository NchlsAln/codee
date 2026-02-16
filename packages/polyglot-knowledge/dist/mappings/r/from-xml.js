"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToRRules = void 0;
exports.xmlToR = xmlToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "r");
function xmlToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "r", code);
}
exports.xmlToRRules = rules;
