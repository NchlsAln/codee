"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToSwiftRules = void 0;
exports.xmlToSwift = xmlToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "swift");
function xmlToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "swift", code);
}
exports.xmlToSwiftRules = rules;
