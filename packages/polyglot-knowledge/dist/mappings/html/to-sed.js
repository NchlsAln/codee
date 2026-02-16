"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToSedRules = void 0;
exports.htmlToSed = htmlToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "sed");
function htmlToSed(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "sed", code);
}
exports.htmlToSedRules = rules;
