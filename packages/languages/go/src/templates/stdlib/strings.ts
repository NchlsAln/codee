export function stringsTemplate(): string {
  return "package main\n\nimport (\n  \"fmt\"\n  \"strings\"\n)\n\nfunc main() {\n  raw := \"  Ada Lovelace  \"\n  trimmed := strings.TrimSpace(raw)\n  slug := strings.ToLower(strings.ReplaceAll(trimmed, \" \", \"-\"))\n  parts := strings.Split(slug, \"-\")\n  fmt.Println(parts)\n}\n";
}
