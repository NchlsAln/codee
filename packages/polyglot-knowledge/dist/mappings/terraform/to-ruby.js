"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToRubyRules = void 0;
exports.terraformToRuby = terraformToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "ruby");
function terraformToRuby(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "ruby", code);
}
exports.terraformToRubyRules = rules;
