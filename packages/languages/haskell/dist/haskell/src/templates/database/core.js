"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTemplate = databaseTemplate;
function databaseTemplate() {
    return [
        "{-# LANGUAGE GADTs #-}",
        "import Database.Persist",
        "import Database.Persist.Sqlite",
        "main = runSqlite \"app.db\" $ do",
        "  rawExecute \"create table if not exists users (id int, name text)\" []",
        "  rawExecute \"insert into users values (1, 'Ada')\" []"
    ].join("\n");
}
