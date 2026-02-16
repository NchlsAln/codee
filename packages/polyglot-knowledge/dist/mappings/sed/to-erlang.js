"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToErlangRules = void 0;
exports.sedToErlang = sedToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "erlang");
function sedToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "erlang", code);
}
exports.sedToErlangRules = rules;
