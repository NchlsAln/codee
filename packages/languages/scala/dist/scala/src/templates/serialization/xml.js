"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return [
        "import scala.xml.XML",
        "",
        "val xml = <user><id>1</id><name>Ada</name></user>",
        "val name = (xml \\ \"name\").text",
        "println(name)",
        "XML.save(\"user.xml\", xml)"
    ].join("\n");
}
