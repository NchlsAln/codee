export function structureTemplate(): string {
  return [
    "$layout-gap: 1.5rem;",
    ".layout { display: grid; gap: $layout-gap; }"
  ].join("\n");
}
