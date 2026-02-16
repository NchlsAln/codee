export function stringsTemplate(): string {
  return [
    "const raw = '  Ada Lovelace  ';",
    "const trimmed = raw.trim();",
    "const slug = trimmed.toLowerCase().replace(/\s+/g, '-');",
    "const title = slug.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join(' ');",
    "",
    "console.log(slug);",
    "console.log(title);"
  ].join("\n");
}
