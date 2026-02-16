"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToSwiftRules = void 0;
exports.scssToSwift = scssToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "swift");
function scssToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "swift", code);
}
exports.scssToSwiftRules = rules;
