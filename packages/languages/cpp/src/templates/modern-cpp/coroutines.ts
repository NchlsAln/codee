export function coroutinesTemplate(): string {
  return "#include <coroutine>\n#include <iostream>\n\nstruct Task {\n  struct promise_type {\n    Task get_return_object() { return {}; }\n    std::suspend_never initial_suspend() { return {}; }\n    std::suspend_never final_suspend() noexcept { return {}; }\n    void return_void() {}\n    void unhandled_exception() {}\n  };\n};\n\nTask run() {\n  std::cout << \"coroutine\" << \"\\n\";\n  co_return;\n}\n\nint main() {\n  run();\n  return 0;\n}\n";
}
