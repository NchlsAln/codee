"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return [
        "using System.Xml.Serialization;",
        "",
        "public record User(int Id, string Name);",
        "",
        "var serializer = new XmlSerializer(typeof(User));",
        "using var writer = new StringWriter();",
        "serializer.Serialize(writer, new User(1, \"Ada\"));",
        "Console.WriteLine(writer.ToString());"
    ].join("\n");
}
