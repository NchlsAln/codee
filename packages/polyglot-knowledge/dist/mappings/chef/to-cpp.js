"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToCppRules = void 0;
exports.chefToCpp = chefToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "cpp");
function chefToCpp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "cpp", code);
}
exports.chefToCppRules = rules;
