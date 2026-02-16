"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToScalaRules = void 0;
exports.swiftToScala = swiftToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "scala");
function swiftToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "scala", code);
}
exports.swiftToScalaRules = rules;
