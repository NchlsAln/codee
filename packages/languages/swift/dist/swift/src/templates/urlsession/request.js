"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlSessionTemplate = urlSessionTemplate;
function urlSessionTemplate() {
    return [
        "import Foundation",
        "",
        "let url = URL(string: \"https://example.com\")!",
        "let task = URLSession.shared.dataTask(with: url) { data, _, _ in",
        "  if let data = data {",
        "    print(data.count)",
        "  }",
        "}",
        "task.resume()"
    ].join("\n");
}
