"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToHaskellRules = void 0;
exports.dockerfileToHaskell = dockerfileToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "haskell");
function dockerfileToHaskell(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "haskell", code);
}
exports.dockerfileToHaskellRules = rules;
