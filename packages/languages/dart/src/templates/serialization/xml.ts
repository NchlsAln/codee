export function xmlTemplate(): string {
  return [
    "import 'package:xml/xml.dart';",
    "",
    "final builder = XmlBuilder();",
    "builder.element('user', nest: () {",
    "  builder.element('name', nest: 'Ada');",
    "});",
    "print(builder.buildDocument().toXmlString());"
  ].join("\n");
}
