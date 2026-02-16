"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToRustRules = void 0;
exports.xmlToRust = xmlToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "rust");
function xmlToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "rust", code);
}
exports.xmlToRustRules = rules;
