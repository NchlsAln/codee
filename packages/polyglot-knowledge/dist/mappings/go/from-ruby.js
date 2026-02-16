"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToGoRules = void 0;
exports.rubyToGo = rubyToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "go");
function rubyToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "go", code);
}
exports.rubyToGoRules = rules;
