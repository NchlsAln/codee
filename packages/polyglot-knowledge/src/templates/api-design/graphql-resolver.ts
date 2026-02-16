import { LanguageId } from "../../types";

export function graphqlResolverTemplate(language: LanguageId): string {
  switch (language) {
    case "python":
      return "def resolve_user(root, info, id):\n    return get_user(id)\n";
    case "typescript":
      return "const resolvers = {\n  Query: {\n    user: (_: unknown, args: { id: string }) => getUser(args.id)\n  }\n};\n";
    case "rust":
      return "// TODO: GraphQL resolver for Rust (async-graphql)\n";
    case "go":
      return "// TODO: GraphQL resolver for Go (gqlgen)\n";
    default:
      return "// TODO: Implement template";
  }
}
