export function httpGraphqlTemplate(): string {
  return [
    "import 'package:graphql_server/graphql_server.dart';",
    "",
    "final schema = GraphQLSchema(queryType: objectType('Query', fields: {",
    "  'ping': graphQLString.field(resolve: (_, __) => 'pong'),",
    "}));",
    "print(schema.queryType.name);"
  ].join("\n");
}
