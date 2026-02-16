export function binaryTemplate(): string {
  return "package main\n\nimport (\n  \"bytes\"\n  \"encoding/gob\"\n)\n\ntype User struct {\n  ID int\n  Email string\n}\n\nfunc main() {\n  var buf bytes.Buffer\n  _ = gob.NewEncoder(&buf).Encode(User{ID: 1, Email: \"ada@example.com\"})\n}\n";
}
