"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToScalaRules = void 0;
exports.zigToScala = zigToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "scala");
function zigToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "scala", code);
}
exports.zigToScalaRules = rules;
