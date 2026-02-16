"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToScalaRules = void 0;
exports.juliaToScala = juliaToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "scala");
function juliaToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "scala", code);
}
exports.juliaToScalaRules = rules;
