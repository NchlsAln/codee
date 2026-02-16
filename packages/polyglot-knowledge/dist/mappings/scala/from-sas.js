"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToScalaRules = void 0;
exports.sasToScala = sasToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "scala");
function sasToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "scala", code);
}
exports.sasToScalaRules = rules;
