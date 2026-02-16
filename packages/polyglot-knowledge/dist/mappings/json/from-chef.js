"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToJsonRules = void 0;
exports.chefToJson = chefToJson;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "json");
function chefToJson(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "json", code);
}
exports.chefToJsonRules = rules;
