export function migrationsTemplate(): string {
  return "package main\n\nimport (\n  \"github.com/pressly/goose/v3\"\n)\n\nfunc main() {\n  _ = goose.Up(nil, \"migrations\")\n}\n";
}
