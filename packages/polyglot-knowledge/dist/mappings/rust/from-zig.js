"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToRustRules = void 0;
exports.zigToRust = zigToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "rust");
function zigToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "rust", code);
}
exports.zigToRustRules = rules;
