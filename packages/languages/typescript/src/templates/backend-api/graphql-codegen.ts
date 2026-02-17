export function graphqlCodegenTemplate(): string {
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
