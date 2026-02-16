"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToRubyRules = void 0;
exports.ansibleToRuby = ansibleToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "ruby");
function ansibleToRuby(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "ruby", code);
}
exports.ansibleToRubyRules = rules;
