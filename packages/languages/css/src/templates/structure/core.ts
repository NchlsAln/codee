export function structureTemplate(): string {
  return [
    "body { margin: 0; font-family: system-ui; }",
    ".layout { display: grid; grid-template-rows: auto 1fr auto; min-height: 100vh; }"
  ].join("\n");
}
