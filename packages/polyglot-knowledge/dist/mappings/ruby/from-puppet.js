"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToRubyRules = void 0;
exports.puppetToRuby = puppetToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "ruby");
function puppetToRuby(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "ruby", code);
}
exports.puppetToRubyRules = rules;
