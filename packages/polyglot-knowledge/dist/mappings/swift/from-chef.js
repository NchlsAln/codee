"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToSwiftRules = void 0;
exports.chefToSwift = chefToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "swift");
function chefToSwift(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "swift", code);
}
exports.chefToSwiftRules = rules;
