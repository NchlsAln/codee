"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToPhpRules = void 0;
exports.htmlToPhp = htmlToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "php");
function htmlToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "php", code);
}
exports.htmlToPhpRules = rules;
