export function jsonTemplate(): string {
  return [
    "type User = { id: number; email: string };",
    "const user: User = { id: 1, email: 'ada@example.com' };",
    "",
    "const payload = JSON.stringify(user);",
    "const restored = JSON.parse(payload) as User;",
    "",
    "console.log(restored.email);"
  ].join("\n");
}
