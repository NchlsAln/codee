export function collectionsTemplate(): string {
  return [
    "const users = [",
    "  { id: 1, name: 'Ada' },",
    "  { id: 2, name: 'Linus' },",
    "];",
    "",
    "const byId = new Map(users.map((user) => [user.id, user]));",
    "const names = new Set(users.map((user) => user.name));",
    "",
    "console.log(byId.get(1));",
    "console.log(names.has('Ada'));"
  ].join("\n");
}
