"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToGoRules = void 0;
exports.cssToGo = cssToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "go");
function cssToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "go", code);
}
exports.cssToGoRules = rules;
