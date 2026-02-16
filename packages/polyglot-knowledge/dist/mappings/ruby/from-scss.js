"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToRubyRules = void 0;
exports.scssToRuby = scssToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "ruby");
function scssToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "ruby", code);
}
exports.scssToRubyRules = rules;
