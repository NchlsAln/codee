export function containersTemplate(): string {
  return "#include <algorithm>\n#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <vector>\n\nint main() {\n  std::vector<int> values{1, 2, 3, 4};\n  std::unordered_map<std::string, int> counts{{\"a\", 1}, {\"b\", 2}};\n\n  std::vector<int> doubled;\n  std::transform(values.begin(), values.end(), std::back_inserter(doubled),\n                 [](int v) { return v * 2; });\n\n  std::cout << doubled.size() + counts.size() << \"\\n\";\n  return 0;\n}\n";
}
