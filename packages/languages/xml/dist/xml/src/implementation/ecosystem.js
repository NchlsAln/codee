"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlEcosystem = void 0;
exports.xmlEcosystem = {
    fileExtensions: [".xml", ".xsd", ".xsl", ".xslt"],
    paradigms: ["data-serialization"],
    libraries: ["libxml2", "xerces", "JAXB"],
    schemas: ["XSD", "Relax NG"],
    transforms: ["XSLT", "XPath"],
    tooling: ["xmllint", "xsltproc"],
    enterprise: ["SOAP", "WSDL"],
    deploymentTargets: ["enterprise integration", "config", "docs"]
};
