export function accessibilityTemplate(): string {
  return [
    ":focus-visible { outline: 2px solid #0f62fe; outline-offset: 2px; }",
    "@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }"
  ].join("\n");
}
