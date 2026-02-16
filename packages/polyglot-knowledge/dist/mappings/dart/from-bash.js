"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToDartRules = void 0;
exports.bashToDart = bashToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "dart");
function bashToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "dart", code);
}
exports.bashToDartRules = rules;
