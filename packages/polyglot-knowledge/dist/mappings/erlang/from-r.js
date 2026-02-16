"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToErlangRules = void 0;
exports.rToErlang = rToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "erlang");
function rToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "erlang", code);
}
exports.rToErlangRules = rules;
