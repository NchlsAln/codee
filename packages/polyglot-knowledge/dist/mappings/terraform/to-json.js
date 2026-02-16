"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToJsonRules = void 0;
exports.terraformToJson = terraformToJson;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "json");
function terraformToJson(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "json", code);
}
exports.terraformToJsonRules = rules;
