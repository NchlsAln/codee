export function cliConfigTemplate(): string {
  return "#include <iostream>\n#include <toml++/toml.h>\n\nint main() {\n  auto config = toml::parse_file(\"app.toml\");\n  auto host = config[\"server\"][\"host\"].value_or(\"localhost\");\n  std::cout << host << \"\\n\";\n  return 0;\n}\n";
}
