"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToOcamlRules = void 0;
exports.cssToOcaml = cssToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "ocaml");
function cssToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "ocaml", code);
}
exports.cssToOcamlRules = rules;
