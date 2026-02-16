"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToErlangRules = void 0;
exports.crystalToErlang = crystalToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "erlang");
function crystalToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "erlang", code);
}
exports.crystalToErlangRules = rules;
