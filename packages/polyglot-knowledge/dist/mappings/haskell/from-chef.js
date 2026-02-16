"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToHaskellRules = void 0;
exports.chefToHaskell = chefToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "haskell");
function chefToHaskell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "haskell", code);
}
exports.chefToHaskellRules = rules;
