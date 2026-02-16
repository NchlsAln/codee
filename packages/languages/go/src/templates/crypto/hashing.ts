export function hashingTemplate(): string {
  return "package main\n\nimport (\n  \"crypto/sha256\"\n  \"fmt\"\n)\n\nfunc main() {\n  sum := sha256.Sum256([]byte(\"secret\"))\n  fmt.Printf(\"%x\\n\", sum)\n}\n";
}
