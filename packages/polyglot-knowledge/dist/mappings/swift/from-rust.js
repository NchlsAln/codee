"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToSwiftRules = void 0;
exports.rustToSwift = rustToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "swift");
function rustToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "swift", code);
}
exports.rustToSwiftRules = rules;
