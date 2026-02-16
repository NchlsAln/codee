export function optimizationTemplate(): string {
  return [
    "proc optmodel;",
    "  var x >= 0;",
    "  minimize cost = x;",
    "  solve;",
    "quit;"
  ].join("\n");
}
