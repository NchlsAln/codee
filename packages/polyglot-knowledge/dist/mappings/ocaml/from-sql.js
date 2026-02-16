"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToOcamlRules = void 0;
exports.sqlToOcaml = sqlToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "ocaml");
function sqlToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "ocaml", code);
}
exports.sqlToOcamlRules = rules;
