export function propertyTemplate(): string {
  return "#include <rapidcheck.h>\n\nint main() {\n  rc::check(\"addition commutes\", [](int a, int b) {\n    RC_ASSERT(a + b == b + a);\n  });\n  return 0;\n}\n";
}
