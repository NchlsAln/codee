"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToSwiftRules = void 0;
exports.sasToSwift = sasToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "swift");
function sasToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "swift", code);
}
exports.sasToSwiftRules = rules;
