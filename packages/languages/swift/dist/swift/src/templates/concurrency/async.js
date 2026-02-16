"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "import Foundation",
        "",
        "func fetch() async throws -> String {",
        "  let url = URL(string: \"https://example.com\")!",
        "  let (data, _) = try await URLSession.shared.data(from: url)",
        "  return String(decoding: data, as: UTF8.self)",
        "}",
        "",
        "Task {",
        "  let text = try await fetch()",
        "  print(text.count)",
        "}"
    ].join("\n");
}
