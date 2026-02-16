export function databaseTemplate(): string {
  return [
    "using SQLite, DataFrames",
    "db = SQLite.DB(\"app.db\")",
    "df = DataFrame(SQLite.Query(db, \"select 1 as id\"))",
    "println(df)"
  ].join("\n");
}
