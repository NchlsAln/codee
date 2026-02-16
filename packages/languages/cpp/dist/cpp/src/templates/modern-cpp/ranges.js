"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rangesTemplate = rangesTemplate;
function rangesTemplate() {
    return "#include <iostream>\n#include <ranges>\n#include <vector>\n\nint main() {\n  std::vector<int> values{1, 2, 3, 4, 5};\n  auto even = values | std::views::filter([](int v) { return v % 2 == 0; })\n                    | std::views::transform([](int v) { return v * v; });\n\n  for (int v : even) {\n    std::cout << v << \" \";\n  }\n  std::cout << \"\\n\";\n  return 0;\n}\n";
}
