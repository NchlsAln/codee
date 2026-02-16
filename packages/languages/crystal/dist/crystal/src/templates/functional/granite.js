"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graniteTemplate = graniteTemplate;
function graniteTemplate() {
    return [
        "class User < Granite::Base",
        "  connection sqlite, \"./db.sqlite3\"",
        "  table users",
        "  column name : String",
        "end"
    ].join("\n");
}
