"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToErlangRules = void 0;
exports.yamlToErlang = yamlToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "erlang");
function yamlToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "erlang", code);
}
exports.yamlToErlangRules = rules;
