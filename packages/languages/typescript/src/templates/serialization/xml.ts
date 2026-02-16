export function xmlTemplate(): string {
  return [
    "import { XMLBuilder } from 'fast-xml-parser';",
    "",
    "const builder = new XMLBuilder({ ignoreAttributes: false });",
    "const xml = builder.build({ user: { '@_id': 1, email: 'ada@example.com' } });",
    "",
    "console.log(xml);"
  ].join("\n");
}
