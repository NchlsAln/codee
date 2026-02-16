"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToJsonRules = void 0;
exports.ansibleToJson = ansibleToJson;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "json");
function ansibleToJson(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "json", code);
}
exports.ansibleToJsonRules = rules;
