"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToSwiftRules = void 0;
exports.rubyToSwift = rubyToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "swift");
function rubyToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "swift", code);
}
exports.rubyToSwiftRules = rules;
