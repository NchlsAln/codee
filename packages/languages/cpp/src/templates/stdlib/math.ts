export function mathTemplate(): string {
  return "#include <cmath>\n#include <iostream>\n#include <vector>\n\nint main() {\n  std::vector<double> values{2, 4, 4, 4, 5};\n  double sum = 0;\n  for (double v : values) { sum += v; }\n  double mean = sum / values.size();\n  double variance = 0;\n  for (double v : values) { variance += (v - mean) * (v - mean); }\n  variance /= values.size();\n  std::cout << mean << \" \" << std::sqrt(variance) << \"\\n\";\n  return 0;\n}\n";
}
