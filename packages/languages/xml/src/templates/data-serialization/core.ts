export function dataSerializationTemplate(): string {
  return [
    "<items>",
    "  <item id=\"1\"><name>Item</name></item>",
    "</items>"
  ].join("\n");
}
