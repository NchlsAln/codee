"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToJsonRules = void 0;
exports.puppetToJson = puppetToJson;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "json");
function puppetToJson(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "json", code);
}
exports.puppetToJsonRules = rules;
