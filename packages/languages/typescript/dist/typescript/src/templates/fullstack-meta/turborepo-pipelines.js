"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turborepoPipelinesTemplate = turborepoPipelinesTemplate;
function turborepoPipelinesTemplate() {
  return [
    "// turbo.json",
    "// {",
    '//   "pipeline": {',
    '//     "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },',
    '//     "lint": { "outputs": [] },',
    '//     "test": { "dependsOn": ["build"], "outputs": [] }',
    "//   }",
    "// }",
  ].join("\n");
}
