"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conceptsTemplate = conceptsTemplate;
function conceptsTemplate() {
    return "#include <concepts>\n#include <iostream>\n\ntemplate <typename T>\nconcept Numeric = std::integral<T> || std::floating_point<T>;\n\nNumeric auto add(Numeric auto a, Numeric auto b) {\n  return a + b;\n}\n\nint main() {\n  std::cout << add(3, 4) << \"\\n\";\n  return 0;\n}\n";
}
