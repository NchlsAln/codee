"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTemplate = databaseTemplate;
function databaseTemplate() {
    return [
        "library(DBI)",
        "con <- dbConnect(RSQLite::SQLite(), 'app.db')",
        "dbWriteTable(con, 'users', df, overwrite = TRUE)",
        "dbGetQuery(con, 'select count(*) as n from users')",
        "dbDisconnect(con)"
    ].join("\n");
}
