"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToSwiftRules = void 0;
exports.rToSwift = rToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "swift");
function rToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "swift", code);
}
exports.rToSwiftRules = rules;
