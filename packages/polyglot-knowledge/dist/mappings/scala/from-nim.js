"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToScalaRules = void 0;
exports.nimToScala = nimToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "scala");
function nimToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "scala", code);
}
exports.nimToScalaRules = rules;
