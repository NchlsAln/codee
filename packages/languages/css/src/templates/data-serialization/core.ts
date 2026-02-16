export function dataSerializationTemplate(): string {
  return [
    ".stat { display: grid; grid-template-columns: auto 1fr; gap: 0.5rem; }"
  ].join("\n");
}
