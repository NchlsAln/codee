"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToXmlRules = void 0;
exports.chefToXml = chefToXml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "xml");
function chefToXml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "xml", code);
}
exports.chefToXmlRules = rules;
