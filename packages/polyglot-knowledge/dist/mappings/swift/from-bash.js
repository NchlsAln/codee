"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToSwiftRules = void 0;
exports.bashToSwift = bashToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "swift");
function bashToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "swift", code);
}
exports.bashToSwiftRules = rules;
