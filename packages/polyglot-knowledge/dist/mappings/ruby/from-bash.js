"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToRubyRules = void 0;
exports.bashToRuby = bashToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "ruby");
function bashToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "ruby", code);
}
exports.bashToRubyRules = rules;
