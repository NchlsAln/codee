export function cliArgsTemplate(): string {
  return "#include <cxxopts.hpp>\n#include <iostream>\n\nint main(int argc, char** argv) {\n  cxxopts::Options options(\"app\", \"Example CLI\");\n  options.add_options()(\"count\", \"count\", cxxopts::value<int>()->default_value(\"1\"));\n  auto result = options.parse(argc, argv);\n  std::cout << result[\"count\"].as<int>() << \"\\n\";\n  return 0;\n}\n";
}
