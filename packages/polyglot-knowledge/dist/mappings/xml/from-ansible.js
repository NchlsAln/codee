"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToXmlRules = void 0;
exports.ansibleToXml = ansibleToXml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "xml");
function ansibleToXml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "xml", code);
}
exports.ansibleToXmlRules = rules;
