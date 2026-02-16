"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToJuliaRules = void 0;
exports.htmlToJulia = htmlToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "julia");
function htmlToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "julia", code);
}
exports.htmlToJuliaRules = rules;
