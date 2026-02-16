"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToErlangRules = void 0;
exports.juliaToErlang = juliaToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "erlang");
function juliaToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "erlang", code);
}
exports.juliaToErlangRules = rules;
