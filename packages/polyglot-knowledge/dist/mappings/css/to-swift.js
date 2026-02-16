"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToSwiftRules = void 0;
exports.cssToSwift = cssToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "swift");
function cssToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "swift", code);
}
exports.cssToSwiftRules = rules;
