export function ioTemplate(): string {
  return [
    "import Foundation",
    "",
    "let path = \"data.txt\"",
    "let text = try String(contentsOfFile: path, encoding: .utf8)",
    "try (text + \"\\nmore\").write(toFile: path, atomically: true, encoding: .utf8)",
    "print(text)"
  ].join("\n");
}
