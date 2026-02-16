"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToRustRules = void 0;
exports.swiftToRust = swiftToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "rust");
function swiftToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "rust", code);
}
exports.swiftToRustRules = rules;
