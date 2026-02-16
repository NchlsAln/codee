export function databaseTemplate(): string {
  return [
    "libname sales odbc datasrc='db';",
    "proc sql;",
    "  select count(*) as n from sales.users;",
    "quit;"
  ].join("\n");
}
