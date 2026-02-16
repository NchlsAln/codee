export function mathTemplate(): string {
  return [
    "const values = [2, 4, 4, 4, 5];",
    "const mean = values.reduce((sum, value) => sum + value, 0) / values.length;",
    "const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;",
    "const std = Math.sqrt(variance);",
    "",
    "console.log({ mean, std });"
  ].join("\n");
}
