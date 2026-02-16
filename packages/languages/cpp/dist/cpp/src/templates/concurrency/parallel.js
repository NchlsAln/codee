"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return "#include <execution>\n#include <iostream>\n#include <numeric>\n#include <vector>\n\nint main() {\n  std::vector<int> values{1, 2, 3, 4};\n  int sum = std::reduce(std::execution::par, values.begin(), values.end(), 0);\n  std::cout << sum << \"\\n\";\n  return 0;\n}\n";
}
