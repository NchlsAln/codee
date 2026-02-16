export function concurrencyTemplate(): string {
  return "#include <future>\n#include <iostream>\n#include <mutex>\n#include <thread>\n\nint main() {\n  int counter = 0;\n  std::mutex mu;\n\n  auto worker = [&]() {\n    std::lock_guard<std::mutex> guard(mu);\n    counter += 1;\n  };\n\n  std::thread t(worker);\n  auto result = std::async(std::launch::async, []() { return 7; });\n\n  t.join();\n  std::cout << counter + result.get() << \"\\n\";\n  return 0;\n}\n";
}
