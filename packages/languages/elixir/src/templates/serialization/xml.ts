export function xmlTemplate(): string {
  return [
    "xml = '<user><name>Ada</name></user>'",
    "{:ok, doc} = :xmerl_scan.string(String.to_charlist(xml))",
    "IO.inspect(doc)"
  ].join("\n");
}
