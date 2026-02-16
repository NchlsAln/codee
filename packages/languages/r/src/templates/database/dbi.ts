export function dbiTemplate(): string {
  return [
    "library(DBI)",
    "con <- dbConnect(RSQLite::SQLite(), ':memory:')",
    "dbWriteTable(con, 'items', data.frame(id = 1:3, value = c('a','b','c')))",
    "dbReadTable(con, 'items')",
    "dbDisconnect(con)"
  ].join("\n");
}
