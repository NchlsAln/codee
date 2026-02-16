export function collectionsTemplate(): string {
  return "#include <iostream>\n#include <unordered_map>\n#include <vector>\n\nint main() {\n  std::vector<std::string> words{\"red\", \"blue\", \"red\"};\n  std::unordered_map<std::string, int> counts;\n  for (const auto& word : words) {\n    counts[word]++;\n  }\n  std::cout << counts[\"red\"] << \"\\n\";\n  return 0;\n}\n";
}
