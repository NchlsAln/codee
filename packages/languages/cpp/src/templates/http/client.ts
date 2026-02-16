export function httpClientTemplate(): string {
  return "#include <cpr/cpr.h>\n#include <iostream>\n\nint main() {\n  auto response = cpr::Get(cpr::Url{\"https://example.com/health\"});\n  std::cout << response.text << \"\\n\";\n  return 0;\n}\n";
}
