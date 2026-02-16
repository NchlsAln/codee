export function componentsTemplate(): string {
  return [
    ".btn {",
    "  &--primary { background: $color-primary; color: #fff; }",
    "}"
  ].join("\n");
}
