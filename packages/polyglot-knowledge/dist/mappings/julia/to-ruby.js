"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToRubyRules = void 0;
exports.juliaToRuby = juliaToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "ruby");
function juliaToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "ruby", code);
}
exports.juliaToRubyRules = rules;
