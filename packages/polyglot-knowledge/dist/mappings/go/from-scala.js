"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToGoRules = void 0;
exports.scalaToGo = scalaToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "go");
function scalaToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "go", code);
}
exports.scalaToGoRules = rules;
