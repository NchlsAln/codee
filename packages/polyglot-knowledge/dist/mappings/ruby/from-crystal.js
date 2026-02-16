"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToRubyRules = void 0;
exports.crystalToRuby = crystalToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "ruby");
function crystalToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "ruby", code);
}
exports.crystalToRubyRules = rules;
