export function accessibilityTemplate(): string {
  return [
    "<nav aria-label=\"Main\">",
    "  <a href=\"/\">Home</a>",
    "</nav>",
    "<img src=\"hero.jpg\" alt=\"Hero image\">"
  ].join("\n");
}
