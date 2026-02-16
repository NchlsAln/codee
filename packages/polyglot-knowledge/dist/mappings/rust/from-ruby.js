"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToRustRules = void 0;
exports.rubyToRust = rubyToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "rust");
function rubyToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "rust", code);
}
exports.rubyToRustRules = rules;
