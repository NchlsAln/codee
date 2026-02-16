"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToSwiftRules = void 0;
exports.scalaToSwift = scalaToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "swift");
function scalaToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "swift", code);
}
exports.scalaToSwiftRules = rules;
