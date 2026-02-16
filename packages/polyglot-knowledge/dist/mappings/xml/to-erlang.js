"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToErlangRules = void 0;
exports.xmlToErlang = xmlToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "erlang");
function xmlToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "erlang", code);
}
exports.xmlToErlangRules = rules;
