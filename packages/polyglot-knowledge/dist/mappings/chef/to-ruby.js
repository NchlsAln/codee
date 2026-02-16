"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToRubyRules = void 0;
exports.chefToRuby = chefToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "ruby");
function chefToRuby(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "ruby", code);
}
exports.chefToRubyRules = rules;
