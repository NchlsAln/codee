"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToRubyRules = void 0;
exports.sedToRuby = sedToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "ruby");
function sedToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "ruby", code);
}
exports.sedToRubyRules = rules;
