"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToErlangRules = void 0;
exports.jsonToErlang = jsonToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "erlang");
function jsonToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "erlang", code);
}
exports.jsonToErlangRules = rules;
