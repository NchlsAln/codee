"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return [
        "import Foundation",
        "",
        "final class Handler: NSObject, XMLParserDelegate {",
        "  func parser(_ parser: XMLParser, foundCharacters string: String) { print(string) }",
        "}",
        "let data = \"<user><name>Ada</name></user>\".data(using: .utf8)!",
        "let parser = XMLParser(data: data)",
        "let handler = Handler()",
        "parser.delegate = handler",
        "parser.parse()"
    ].join("\n");
}
