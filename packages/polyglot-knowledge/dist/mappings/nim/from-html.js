"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToNimRules = void 0;
exports.htmlToNim = htmlToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "nim");
function htmlToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "nim", code);
}
exports.htmlToNimRules = rules;
