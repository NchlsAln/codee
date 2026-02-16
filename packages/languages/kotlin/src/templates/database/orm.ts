export function ormTemplate(): string {
  return [
    "import org.jetbrains.exposed.dao.id.IntIdTable",
    "",
    "object Users : IntIdTable() {",
    "  val email = varchar(\"email\", 255).uniqueIndex()",
    "}"
  ].join("\n");
}
