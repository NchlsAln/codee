"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToOcamlRules = void 0;
exports.sasToOcaml = sasToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "ocaml");
function sasToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "ocaml", code);
}
exports.sasToOcamlRules = rules;
