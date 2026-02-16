"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToOcamlRules = void 0;
exports.rToOcaml = rToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "ocaml");
function rToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "ocaml", code);
}
exports.rToOcamlRules = rules;
