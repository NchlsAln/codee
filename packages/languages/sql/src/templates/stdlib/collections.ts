export function collectionsTemplate(): string {
  return [
    "SELECT id, name",
    "FROM users",
    "WHERE active = TRUE;"
  ].join("\n");
}
