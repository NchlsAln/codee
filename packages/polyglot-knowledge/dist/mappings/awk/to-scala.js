"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToScalaRules = void 0;
exports.awkToScala = awkToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "scala");
function awkToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "scala", code);
}
exports.awkToScalaRules = rules;
