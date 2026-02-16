"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToSwiftRules = void 0;
exports.phpToSwift = phpToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "swift");
function phpToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "swift", code);
}
exports.phpToSwiftRules = rules;
