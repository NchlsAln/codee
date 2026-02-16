"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToJuliaRules = void 0;
exports.xmlToJulia = xmlToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "julia");
function xmlToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "julia", code);
}
exports.xmlToJuliaRules = rules;
