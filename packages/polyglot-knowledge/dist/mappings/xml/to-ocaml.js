"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToOcamlRules = void 0;
exports.xmlToOcaml = xmlToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "ocaml");
function xmlToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "ocaml", code);
}
exports.xmlToOcamlRules = rules;
