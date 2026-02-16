"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToRubyRules = void 0;
exports.xmlToRuby = xmlToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "ruby");
function xmlToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "ruby", code);
}
exports.xmlToRubyRules = rules;
