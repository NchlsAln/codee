"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToAwkRules = void 0;
exports.htmlToAwk = htmlToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "awk");
function htmlToAwk(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "awk", code);
}
exports.htmlToAwkRules = rules;
