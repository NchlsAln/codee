"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
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
