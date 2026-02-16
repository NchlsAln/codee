"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return "#include <condition_variable>\n#include <mutex>\n#include <queue>\n\nclass Channel {\npublic:\n  void send(int value) {\n    std::lock_guard<std::mutex> lock(mu_);\n    queue_.push(value);\n    cv_.notify_one();\n  }\n  int receive() {\n    std::unique_lock<std::mutex> lock(mu_);\n    cv_.wait(lock, [&]{ return !queue_.empty(); });\n    int value = queue_.front();\n    queue_.pop();\n    return value;\n  }\nprivate:\n  std::mutex mu_;\n  std::condition_variable cv_;\n  std::queue<int> queue_;\n};\n";
}
