"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToSwiftRules = void 0;
exports.jsonToSwift = jsonToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "swift");
function jsonToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "swift", code);
}
exports.jsonToSwiftRules = rules;
