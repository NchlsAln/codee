"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToRubyRules = void 0;
exports.sqlToRuby = sqlToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "ruby");
function sqlToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "ruby", code);
}
exports.sqlToRubyRules = rules;
