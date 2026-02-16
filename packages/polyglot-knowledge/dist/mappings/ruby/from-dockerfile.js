"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToRubyRules = void 0;
exports.dockerfileToRuby = dockerfileToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "ruby");
function dockerfileToRuby(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "ruby", code);
}
exports.dockerfileToRubyRules = rules;
