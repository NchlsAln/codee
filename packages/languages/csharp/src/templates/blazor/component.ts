export function blazorComponentTemplate(): string {
  return [
    "@page \"/counter\"",
    "",
    "<h3>Counter</h3>",
    "<p>Current count: @currentCount</p>",
    "<button class=\"btn btn-primary\" @onclick=\"Increment\">Click me</button>",
    "",
    "@code {",
    "  private int currentCount = 0;",
    "  private void Increment() => currentCount++;",
    "}"
  ].join("\n");
}
