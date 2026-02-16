"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToOcamlRules = void 0;
exports.htmlToOcaml = htmlToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "ocaml");
function htmlToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "ocaml", code);
}
exports.htmlToOcamlRules = rules;
