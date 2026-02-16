"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToGoRules = void 0;
exports.xmlToGo = xmlToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "go");
function xmlToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "go", code);
}
exports.xmlToGoRules = rules;
