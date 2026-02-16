"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return "#include <future>\n#include <iostream>\n#include <thread>\n\nstd::string work(const std::string& name, int delay_ms) {\n  std::this_thread::sleep_for(std::chrono::milliseconds(delay_ms));\n  return name + \" done\";\n}\n\nint main() {\n  auto a = std::async(std::launch::async, work, \"a\", 200);\n  auto b = std::async(std::launch::async, work, \"b\", 100);\n  std::cout << a.get() << \" \" << b.get() << \"\\n\";\n  return 0;\n}\n";
}
