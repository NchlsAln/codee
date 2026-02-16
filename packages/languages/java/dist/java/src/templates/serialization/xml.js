"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return "import jakarta.xml.bind.JAXBContext;\nimport jakarta.xml.bind.Marshaller;\nimport jakarta.xml.bind.annotation.XmlRootElement;\n\npublic class XmlSample {\n  @XmlRootElement\n  public static class User {\n    public int id;\n    public String email;\n  }\n\n  public static void main(String[] args) throws Exception {\n    JAXBContext ctx = JAXBContext.newInstance(User.class);\n    Marshaller marshaller = ctx.createMarshaller();\n    marshaller.marshal(new User(), System.out);\n  }\n}\n";
}
