export function xmlTemplate(): string {
  return [
    "use quick_xml::se::to_string;",
    "use serde::Serialize;",
    "",
    "#[derive(Serialize)]",
    "struct User { id: i32, email: String }",
    "",
    "let xml = to_string(&User { id: 1, email: \"ada@example.com\".into() })?;",
    "println!(\"{}\", xml);"
  ].join("\n");
}
