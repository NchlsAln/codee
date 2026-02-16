"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToSwiftRules = void 0;
exports.nimToSwift = nimToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "swift");
function nimToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "swift", code);
}
exports.nimToSwiftRules = rules;
