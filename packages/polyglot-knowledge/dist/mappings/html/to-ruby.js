"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToRubyRules = void 0;
exports.htmlToRuby = htmlToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "ruby");
function htmlToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "ruby", code);
}
exports.htmlToRubyRules = rules;
