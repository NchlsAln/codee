export function ormTemplate(): string {
  return [
    "use sea_orm::{Database, EntityTrait};",
    "",
    "let db = Database::connect(\"sqlite::memory:\").await?;",
    "let users = entity::users::Entity::find().all(&db).await?;",
    "",
    "println!(\"{}\", users.len());"
  ].join("\n");
}
