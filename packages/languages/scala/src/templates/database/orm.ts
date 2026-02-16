export function ormTemplate(): string {
  return [
    "import slick.jdbc.PostgresProfile.api._",
    "",
    "case class User(id: Long, name: String)",
    "class Users(tag: Tag) extends Table[User](tag, \"users\") {",
    "  def id = column[Long](\"id\", O.PrimaryKey)",
    "  def name = column[String](\"name\")",
    "  def * = (id, name).mapTo[User]",
    "}",
    "",
    "val users = TableQuery[Users]",
    "val db = Database.forConfig(\"app\")",
    "db.run(users.result).map(println)"
  ].join("\n");
}
