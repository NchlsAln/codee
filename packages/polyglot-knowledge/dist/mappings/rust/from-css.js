"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToRustRules = void 0;
exports.cssToRust = cssToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "rust");
function cssToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "rust", code);
}
exports.cssToRustRules = rules;
