"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToErlangRules = void 0;
exports.nimToErlang = nimToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "erlang");
function nimToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "erlang", code);
}
exports.nimToErlangRules = rules;
