"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToRubyRules = void 0;
exports.sasToRuby = sasToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "ruby");
function sasToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "ruby", code);
}
exports.sasToRubyRules = rules;
