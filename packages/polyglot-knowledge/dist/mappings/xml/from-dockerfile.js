"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToXmlRules = void 0;
exports.dockerfileToXml = dockerfileToXml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "xml");
function dockerfileToXml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "xml", code);
}
exports.dockerfileToXmlRules = rules;
