"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToRRules = void 0;
exports.htmlToR = htmlToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "r");
function htmlToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "r", code);
}
exports.htmlToRRules = rules;
