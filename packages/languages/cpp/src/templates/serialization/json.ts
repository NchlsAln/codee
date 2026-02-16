export function jsonTemplate(): string {
  return "#include <nlohmann/json.hpp>\n#include <iostream>\n\nint main() {\n  nlohmann::json payload = {{\"id\", 1}, {\"email\", \"ada@example.com\"}};\n  std::cout << payload.dump() << \"\\n\";\n  return 0;\n}\n";
}
