export function ffiCTemplate(): string {
  return [
    "import kotlinx.cinterop.*",
    "",
    "@CName(\"add\")",
    "external fun add(a: Int, b: Int): Int",
    "",
    "fun main() {",
    "  println(add(2, 3))",
    "}"
  ].join("\n");
}
