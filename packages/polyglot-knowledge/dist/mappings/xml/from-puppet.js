"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToXmlRules = void 0;
exports.puppetToXml = puppetToXml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "xml");
function puppetToXml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "xml", code);
}
exports.puppetToXmlRules = rules;
