export function ffiCTemplate(): string {
  return "extern \"C\" int add(int a, int b);\n\nint main() {\n  return add(2, 3);\n}\n";
}
