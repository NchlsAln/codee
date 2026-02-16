"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToRubyRules = void 0;
exports.jsonToRuby = jsonToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "ruby");
function jsonToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "ruby", code);
}
exports.jsonToRubyRules = rules;
