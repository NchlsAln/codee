export function structureTemplate(): string {
  return [
    "title: Page",
    "sections:",
    "  - hero",
    "  - features",
    "  - cta"
  ].join("\n");
}
