"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToRubyRules = void 0;
exports.rToRuby = rToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "ruby");
function rToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "ruby", code);
}
exports.rToRubyRules = rules;
