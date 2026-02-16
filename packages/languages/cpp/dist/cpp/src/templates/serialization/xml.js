"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return "#include <tinyxml2.h>\n\nint main() {\n  tinyxml2::XMLDocument doc;\n  auto* root = doc.NewElement(\"user\");\n  root->SetAttribute(\"id\", 1);\n  doc.InsertFirstChild(root);\n  doc.SaveFile(\"user.xml\");\n  return 0;\n}\n";
}
