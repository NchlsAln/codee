"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToScalaRules = void 0;
exports.sedToScala = sedToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "scala");
function sedToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "scala", code);
}
exports.sedToScalaRules = rules;
