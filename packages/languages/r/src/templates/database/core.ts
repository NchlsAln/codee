export function databaseTemplate(): string {
  return [
    "library(DBI)",
    "con <- dbConnect(RSQLite::SQLite(), 'app.db')",
    "dbWriteTable(con, 'users', df, overwrite = TRUE)",
    "dbGetQuery(con, 'select count(*) as n from users')",
    "dbDisconnect(con)"
  ].join("\n");
}
