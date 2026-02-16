"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToRubyRules = void 0;
exports.cssToRuby = cssToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "ruby");
function cssToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "ruby", code);
}
exports.cssToRubyRules = rules;
