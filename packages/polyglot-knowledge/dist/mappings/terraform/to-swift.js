"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToSwiftRules = void 0;
exports.terraformToSwift = terraformToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "swift");
function terraformToSwift(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "swift", code);
}
exports.terraformToSwiftRules = rules;
