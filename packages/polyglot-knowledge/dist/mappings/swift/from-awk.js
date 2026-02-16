"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToSwiftRules = void 0;
exports.awkToSwift = awkToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "swift");
function awkToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "swift", code);
}
exports.awkToSwiftRules = rules;
