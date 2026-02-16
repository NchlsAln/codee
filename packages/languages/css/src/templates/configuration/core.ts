export function configurationTemplate(): string {
  return [
    ":root { --space-2: 0.5rem; --space-4: 1rem; }",
    ".stack > * + * { margin-top: var(--space-4); }"
  ].join("\n");
}
