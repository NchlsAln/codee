"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToGoRules = void 0;
exports.htmlToGo = htmlToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "go");
function htmlToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "go", code);
}
exports.htmlToGoRules = rules;
