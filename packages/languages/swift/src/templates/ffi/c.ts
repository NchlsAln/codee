export function ffiCTemplate(): string {
  return [
    "import Glibc",
    "",
    "let length = strlen(\"hello\")",
    "print(length)"
  ].join("\n");
}
