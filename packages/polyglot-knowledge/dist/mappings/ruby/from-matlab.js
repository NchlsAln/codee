"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToRubyRules = void 0;
exports.matlabToRuby = matlabToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "ruby");
function matlabToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "ruby", code);
}
exports.matlabToRubyRules = rules;
