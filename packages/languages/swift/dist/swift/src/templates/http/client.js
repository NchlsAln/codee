"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "import Foundation",
        "",
        "let url = URL(string: \"https://example.com/health\")!",
        "let (data, _) = try await URLSession.shared.data(from: url)",
        "print(String(data: data, encoding: .utf8) ?? \"\")"
    ].join("\n");
}
