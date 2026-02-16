"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToDartRules = void 0;
exports.pythonToDart = pythonToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "dart");
function pythonToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "dart", code);
}
exports.pythonToDartRules = rules;
