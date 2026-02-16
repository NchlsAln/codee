"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToDartRules = void 0;
exports.csharpToDart = csharpToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "dart");
function csharpToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "dart", code);
}
exports.csharpToDartRules = rules;
