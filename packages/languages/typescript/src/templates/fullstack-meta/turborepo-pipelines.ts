export function turborepoPipelinesTemplate(): string {
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
