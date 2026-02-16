"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToDartRules = void 0;
exports.typescriptToDart = typescriptToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "dart");
function typescriptToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "dart", code);
}
exports.typescriptToDartRules = rules;
