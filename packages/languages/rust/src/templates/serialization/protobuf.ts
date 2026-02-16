export function protobufTemplate(): string {
  return [
    "use prost::Message;",
    "",
    "#[derive(Clone, PartialEq, Message)]",
    "pub struct User {",
    "    #[prost(int32, tag=\"1\")]",
    "    pub id: i32,",
    "    #[prost(string, tag=\"2\")]",
    "    pub email: String,",
    "}",
    "",
    "let user = User { id: 1, email: \"ada@example.com\".into() };",
    "let mut buf = Vec::new();",
    "user.encode(&mut buf)?;",
    "let restored = User::decode(&*buf)?;",
    "",
    "println!(\"{}\", restored.email);"
  ].join("\n");
}
