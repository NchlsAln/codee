export function stringsTemplate(): string {
  return [
    "let raw = \"  Ada Lovelace  \";",
    "let trimmed = raw.trim();",
    "let slug = trimmed.to_lowercase().replace(' ', '-');",
    "let title = slug.split('-').map(|part| {",
    "    let mut chars = part.chars();",
    "    match chars.next() {",
    "        Some(first) => first.to_uppercase().collect::<String>() + chars.as_str(),",
    "        None => String::new(),",
    "    }",
    "}).collect::<Vec<_>>().join(\" \");",
    "",
    "println!(\"{}\", title);"
  ].join("\n");
}
