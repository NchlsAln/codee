"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartPointersTemplate = smartPointersTemplate;
function smartPointersTemplate() {
    return "#include <iostream>\n#include <memory>\n\nstruct Widget {\n  int value = 42;\n};\n\nint main() {\n  auto owned = std::make_unique<Widget>();\n  std::shared_ptr<Widget> shared = std::make_shared<Widget>();\n  std::weak_ptr<Widget> weak = shared;\n\n  std::cout << owned->value + shared->value << \"\\n\";\n  if (auto locked = weak.lock()) {\n    std::cout << locked->value << \"\\n\";\n  }\n  return 0;\n}\n";
}
