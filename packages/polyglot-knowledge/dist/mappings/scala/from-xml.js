"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToScalaRules = void 0;
exports.xmlToScala = xmlToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "scala");
function xmlToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "scala", code);
}
exports.xmlToScalaRules = rules;
