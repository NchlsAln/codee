"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToScalaRules = void 0;
exports.matlabToScala = matlabToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "scala");
function matlabToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "scala", code);
}
exports.matlabToScalaRules = rules;
