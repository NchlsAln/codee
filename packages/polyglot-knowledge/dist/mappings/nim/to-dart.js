"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToDartRules = void 0;
exports.nimToDart = nimToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "dart");
function nimToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "dart", code);
}
exports.nimToDartRules = rules;
