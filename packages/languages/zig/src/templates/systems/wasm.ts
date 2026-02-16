export function wasmTemplate(): string {
  return [
    "export fn add(a: i32, b: i32) i32 {",
    "  return a + b;",
    "}"
  ].join("\n");
}
