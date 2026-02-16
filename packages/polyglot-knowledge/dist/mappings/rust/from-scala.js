"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToRustRules = void 0;
exports.scalaToRust = scalaToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "rust");
function scalaToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "rust", code);
}
exports.scalaToRustRules = rules;
