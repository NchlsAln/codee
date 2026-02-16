"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToRustRules = void 0;
exports.htmlToRust = htmlToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "rust");
function htmlToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "rust", code);
}
exports.htmlToRustRules = rules;
