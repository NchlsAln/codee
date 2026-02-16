"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToSwiftRules = void 0;
exports.dartToSwift = dartToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "swift");
function dartToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "swift", code);
}
exports.dartToSwiftRules = rules;
