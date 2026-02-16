"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToSedRules = void 0;
exports.xmlToSed = xmlToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "sed");
function xmlToSed(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "sed", code);
}
exports.xmlToSedRules = rules;
