"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToGoRules = void 0;
exports.awkToGo = awkToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "go");
function awkToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "go", code);
}
exports.awkToGoRules = rules;
