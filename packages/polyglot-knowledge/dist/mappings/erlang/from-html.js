"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToErlangRules = void 0;
exports.htmlToErlang = htmlToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "erlang");
function htmlToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "erlang", code);
}
exports.htmlToErlangRules = rules;
