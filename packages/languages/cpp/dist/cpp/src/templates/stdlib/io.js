"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return "#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n  std::ofstream out(\"data.txt\");\n  out << \"hello\";\n  out.close();\n\n  std::ifstream in(\"data.txt\");\n  std::string content;\n  std::getline(in, content);\n  std::cout << content << \"\\n\";\n  return 0;\n}\n";
}
