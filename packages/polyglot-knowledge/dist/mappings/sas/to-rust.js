"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToRustRules = void 0;
exports.sasToRust = sasToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "rust");
function sasToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "rust", code);
}
exports.sasToRustRules = rules;
