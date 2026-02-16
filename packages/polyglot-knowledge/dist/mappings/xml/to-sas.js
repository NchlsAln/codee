"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToSasRules = void 0;
exports.xmlToSas = xmlToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "sas");
function xmlToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "sas", code);
}
exports.xmlToSasRules = rules;
