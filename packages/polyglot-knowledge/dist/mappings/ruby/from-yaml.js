"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToRubyRules = void 0;
exports.yamlToRuby = yamlToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "ruby");
function yamlToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "ruby", code);
}
exports.yamlToRubyRules = rules;
