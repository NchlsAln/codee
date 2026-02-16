"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return [
        "import javax.xml.parsers.DocumentBuilderFactory",
        "import javax.xml.transform.TransformerFactory",
        "import javax.xml.transform.dom.DOMSource",
        "import javax.xml.transform.stream.StreamResult",
        "",
        "val doc = DocumentBuilderFactory.newInstance().newDocumentBuilder().newDocument()",
        "val root = doc.createElement(\"user\")",
        "root.setAttribute(\"id\", \"1\")",
        "doc.appendChild(root)",
        "",
        "val transformer = TransformerFactory.newInstance().newTransformer()",
        "transformer.transform(DOMSource(doc), StreamResult(System.out))"
    ].join("\n");
}
