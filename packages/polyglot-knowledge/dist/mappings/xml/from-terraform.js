"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToXmlRules = void 0;
exports.terraformToXml = terraformToXml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "xml");
function terraformToXml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "xml", code);
}
exports.terraformToXmlRules = rules;
