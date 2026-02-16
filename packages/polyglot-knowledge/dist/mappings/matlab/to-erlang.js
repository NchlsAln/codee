"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToErlangRules = void 0;
exports.matlabToErlang = matlabToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "erlang");
function matlabToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "erlang", code);
}
exports.matlabToErlangRules = rules;
