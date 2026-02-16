"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToPhpRules = void 0;
exports.xmlToPhp = xmlToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "php");
function xmlToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "php", code);
}
exports.xmlToPhpRules = rules;
