"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToRubyRules = void 0;
exports.nimToRuby = nimToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "ruby");
function nimToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "ruby", code);
}
exports.nimToRubyRules = rules;
