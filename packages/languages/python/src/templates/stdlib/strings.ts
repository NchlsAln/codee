export function stringsTemplate(): string {
  return [
    "name = '  Ada Lovelace  '\n",
    "slug = name.strip().lower().replace(' ', '-')",
    "parts = slug.split('-')",
    "title = ' '.join(p.capitalize() for p in parts)",
    "print(slug)",
    "print(title)"
  ].join("\n");
}
