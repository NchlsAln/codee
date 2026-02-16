"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTemplate = databaseTemplate;
function databaseTemplate() {
    return [
        "open Caqti_lwt",
        "let uri = Uri.of_string \"sqlite3://app.db\"",
        "let () = ignore uri",
        "let query = Caqti_request.collect Caqti_type.unit Caqti_type.(tup2 int string) \"select id, name from users\"",
        "let _ = query"
    ].join("\n");
}
