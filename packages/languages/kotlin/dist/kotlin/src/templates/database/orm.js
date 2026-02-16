"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return [
        "import org.jetbrains.exposed.dao.id.IntIdTable",
        "",
        "object Users : IntIdTable() {",
        "  val email = varchar(\"email\", 255).uniqueIndex()",
        "}"
    ].join("\n");
}
