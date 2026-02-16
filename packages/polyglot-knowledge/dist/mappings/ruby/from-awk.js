"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToRubyRules = void 0;
exports.awkToRuby = awkToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "ruby");
function awkToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "ruby", code);
}
exports.awkToRubyRules = rules;
