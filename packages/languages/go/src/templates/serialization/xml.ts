export function xmlTemplate(): string {
  return "package main\n\nimport (\n  \"encoding/xml\"\n  \"fmt\"\n)\n\ntype User struct {\n  ID int `xml:\"id\"`\n  Email string `xml:\"email\"`\n}\n\nfunc main() {\n  payload, _ := xml.Marshal(User{ID: 1, Email: \"ada@example.com\"})\n  fmt.Println(string(payload))\n}\n";
}
