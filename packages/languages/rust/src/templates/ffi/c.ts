export function ffiCTemplate(): string {
  return [
    "extern \"C\" {",
    "    fn add(a: i32, b: i32) -> i32;",
    "}",
    "",
    "unsafe {",
    "    println!(\"{}\", add(2, 3));",
    "}"
  ].join("\n");
}
