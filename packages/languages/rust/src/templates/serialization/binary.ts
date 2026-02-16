export function binaryTemplate(): string {
  return [
    "use serde::{Deserialize, Serialize};",
    "",
    "#[derive(Serialize, Deserialize)]",
    "struct User { id: i32, email: String }",
    "",
    "let payload = bincode::serialize(&User { id: 1, email: \"ada@example.com\".into() })?;",
    "let restored: User = bincode::deserialize(&payload)?;",
    "",
    "println!(\"{}\", restored.email);"
  ].join("\n");
}
