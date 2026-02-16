"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToGoRules = void 0;
exports.terraformToGo = terraformToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "go");
function terraformToGo(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "go", code);
}
exports.terraformToGoRules = rules;
