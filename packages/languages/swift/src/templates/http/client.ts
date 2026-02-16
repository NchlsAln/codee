export function httpClientTemplate(): string {
  return [
    "import Foundation",
    "",
    "let url = URL(string: \"https://example.com/health\")!",
    "let (data, _) = try await URLSession.shared.data(from: url)",
    "print(String(data: data, encoding: .utf8) ?? \"\")"
  ].join("\n");
}
