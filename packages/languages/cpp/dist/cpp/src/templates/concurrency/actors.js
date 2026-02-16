"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return "#include <iostream>\n#include <queue>\n\nstruct Message { int value; };\n\nint main() {\n  std::queue<Message> mailbox;\n  mailbox.push({42});\n  while (!mailbox.empty()) {\n    std::cout << mailbox.front().value << \"\\n\";\n    mailbox.pop();\n  }\n  return 0;\n}\n";
}
