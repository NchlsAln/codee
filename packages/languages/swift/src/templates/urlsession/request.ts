export function urlSessionTemplate(): string {
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
