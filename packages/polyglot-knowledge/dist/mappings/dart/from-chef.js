"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToDartRules = void 0;
exports.chefToDart = chefToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "dart");
function chefToDart(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "dart", code);
}
exports.chefToDartRules = rules;
