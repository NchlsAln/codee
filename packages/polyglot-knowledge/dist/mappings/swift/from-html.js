"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToSwiftRules = void 0;
exports.htmlToSwift = htmlToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "swift");
function htmlToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "swift", code);
}
exports.htmlToSwiftRules = rules;
