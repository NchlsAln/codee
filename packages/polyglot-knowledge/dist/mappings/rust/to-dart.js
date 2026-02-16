"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToDartRules = void 0;
exports.rustToDart = rustToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "dart");
function rustToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "dart", code);
}
exports.rustToDartRules = rules;
