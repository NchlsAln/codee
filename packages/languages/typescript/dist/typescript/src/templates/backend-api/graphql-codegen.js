"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlCodegenTemplate = graphqlCodegenTemplate;
function graphqlCodegenTemplate() {
  return [
    "// schema.graphql",
    "// type Query { health: Boolean! }",
    "",
    "// codegen.yml",
    "// generates types and resolvers",
    "",
    "export const resolvers = {",
    "  Query: { health: () => true }",
    "};",
  ].join("\n");
}
