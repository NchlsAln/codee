"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToRubyRules = void 0;
exports.ocamlToRuby = ocamlToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "ruby");
function ocamlToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "ruby", code);
}
exports.ocamlToRubyRules = rules;
