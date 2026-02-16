export function stringsTemplate(): string {
  return [
    "val raw = \"  Ada Lovelace  \"",
    "val trimmed = raw.trim()",
    "val slug = trimmed.lowercase().replace(\" \", \"-\")",
    "val title = slug.split(\"-\").joinToString(\" \") { it.replaceFirstChar { ch -> ch.uppercase() } }",
    "println(slug)",
    "println(title)"
  ].join("\n");
}
