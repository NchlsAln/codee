"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToDartRules = void 0;
exports.sedToDart = sedToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "dart");
function sedToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "dart", code);
}
exports.sedToDartRules = rules;
