export function configurationTemplate(): string {
  return [
    "$spacing: (xs: 0.25rem, sm: 0.5rem, md: 1rem);",
    ".stack > * + * { margin-top: map-get($spacing, md); }"
  ].join("\n");
}
