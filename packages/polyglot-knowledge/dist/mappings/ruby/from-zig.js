"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToRubyRules = void 0;
exports.zigToRuby = zigToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "ruby");
function zigToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "ruby", code);
}
exports.zigToRubyRules = rules;
