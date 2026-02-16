"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return "#include <algorithm>\n#include <cctype>\n#include <iostream>\n#include <string>\n\nint main() {\n  std::string raw = \"  Ada Lovelace  \";\n  raw.erase(raw.begin(), std::find_if(raw.begin(), raw.end(), [](unsigned char c) { return !std::isspace(c); }));\n  raw.erase(std::find_if(raw.rbegin(), raw.rend(), [](unsigned char c) { return !std::isspace(c); }).base(), raw.end());\n  std::transform(raw.begin(), raw.end(), raw.begin(), [](unsigned char c) { return std::tolower(c); });\n  std::cout << raw << \"\\n\";\n  return 0;\n}\n";
}
