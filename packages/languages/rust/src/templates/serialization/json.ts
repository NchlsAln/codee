export function jsonTemplate(): string {
  return [
    "use serde::{Deserialize, Serialize};",
    "",
    "#[derive(Serialize, Deserialize)]",
    "struct User { id: i32, email: String }",
    "",
    "let user = User { id: 1, email: \"ada@example.com\".into() };",
    "let payload = serde_json::to_string(&user)?;",
    "let restored: User = serde_json::from_str(&payload)?;",
    "",
    "println!(\"{}\", restored.email);"
  ].join("\n");
}
