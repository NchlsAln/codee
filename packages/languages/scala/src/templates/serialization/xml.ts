export function xmlTemplate(): string {
  return [
    "import scala.xml.XML",
    "",
    "val xml = <user><id>1</id><name>Ada</name></user>",
    "val name = (xml \\ \"name\").text",
    "println(name)",
    "XML.save(\"user.xml\", xml)"
  ].join("\n");
}
