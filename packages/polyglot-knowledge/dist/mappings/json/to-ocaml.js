"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToOcamlRules = void 0;
exports.jsonToOcaml = jsonToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "ocaml");
function jsonToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "ocaml", code);
}
exports.jsonToOcamlRules = rules;
