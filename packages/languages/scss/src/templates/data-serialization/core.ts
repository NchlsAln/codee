export function dataSerializationTemplate(): string {
  return [
    "$palette: (primary: #0f62fe, muted: #6f6f6f);",
    ".text-muted { color: map-get($palette, muted); }"
  ].join("\n");
}
