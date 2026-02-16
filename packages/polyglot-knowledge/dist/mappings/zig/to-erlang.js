"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToErlangRules = void 0;
exports.zigToErlang = zigToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "erlang");
function zigToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "erlang", code);
}
exports.zigToErlangRules = rules;
