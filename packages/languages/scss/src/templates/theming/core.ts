export function themingTemplate(): string {
  return [
    "$theme-light: (bg: #fff, fg: #111);",
    "$theme-dark: (bg: #111, fg: #f5f5f5);"
  ].join("\n");
}
