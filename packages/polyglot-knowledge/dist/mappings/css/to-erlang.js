"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToErlangRules = void 0;
exports.cssToErlang = cssToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "erlang");
function cssToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "erlang", code);
}
exports.cssToErlangRules = rules;
