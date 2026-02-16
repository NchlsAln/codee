import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("xml", {
      systemPrompt: "You are an XML expert. Ensure well-formed structure, namespaces, and schema alignment.",
      fewShotExamples: [
        {
          task: "XML prolog",
          input: "document header",
          output: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
        },
        {
          task: "Namespace",
          input: "add namespace",
          output: "<doc xmlns=\"urn:example\"></doc>"
        },
        {
          task: "Schema",
          input: "xsd location",
          output: "<doc xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"urn:example schema.xsd\" />"
        }
      ],
      contextHints: [
        "Declare namespaces explicitly and keep prefixes consistent.",
        "Validate against XSD when available.",
        "Avoid DTDs in untrusted contexts.",
        "Keep element nesting shallow for readability.",
        "Use XPath/XSLT for transformations."
      ]
    });
  }
}

