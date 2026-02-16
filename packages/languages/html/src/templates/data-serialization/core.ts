export function dataSerializationTemplate(): string {
  return [
    "<script type=\"application/json\" id=\"data\">",
    "  { \"items\": [\"a\", \"b\"] }",
    "</script>"
  ].join("\n");
}
