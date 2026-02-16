"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToSwiftRules = void 0;
exports.goToSwift = goToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "swift");
function goToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "swift", code);
}
exports.goToSwiftRules = rules;
