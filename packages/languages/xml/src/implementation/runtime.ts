export const xmlRuntime = {
  name: "XML parser",
  supportedVersions: ["XML 1.0", "XML 1.1"],
  processingModel: {
    parsers: "SAX (stream) and DOM (tree)",
    schemas: "XSD validation",
    transforms: "XSLT and XPath",
    namespaces: "QName resolution and URI binding"
  },
  performance: {
    notes: ["Prefer streaming for large files", "Validate with XSD", "Avoid DTD when possible"]
  },
  tooling: {
    libraries: ["libxml2", "xerces", "JAXB"],
    transforms: ["XSLT", "XPath"],
    validation: ["xmllint"]
  }
};
