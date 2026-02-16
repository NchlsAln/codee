export function embeddedTemplate(): string {
  return "#include <cstdint>\n\nint main() {\n  volatile std::uint32_t* reg = reinterpret_cast<std::uint32_t*>(0x40000000);\n  *reg = 0x1;\n  while (true) {}\n  return 0;\n}\n";
}
