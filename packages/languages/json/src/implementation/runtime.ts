export const jsonRuntime = {
  name: "JSON parser/generator",
  supportedVersions: ["RFC 8259"],
  processingModel: {
    parser: "UTF-8 decoding and tokenization",
    generator: "Serialization to canonical JSON",
    schema: "JSON Schema validation for structure"
  },
  performance: {
    notes: ["Avoid deeply nested objects", "Stream large payloads", "Validate schemas"]
  },
  tooling: {
    validators: ["jsonlint", "ajv"],
    query: ["jq", "jsonpath"],
    schema: ["JSON Schema"]
  }
};
