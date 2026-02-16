export function accessibilityTemplate(): string {
  return [
    ":focus-visible { outline: 2px solid $color-primary; outline-offset: 2px; }"
  ].join("\n");
}
