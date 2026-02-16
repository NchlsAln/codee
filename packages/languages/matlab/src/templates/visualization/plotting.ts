export function plotTemplate(): string {
  return [
    "x = 1:10;",
    "y = x.^2;",
    "plot(x, y);",
    "grid on;"
  ].join("\n");
}
