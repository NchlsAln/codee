"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "import 'package:graphql_server/graphql_server.dart';",
        "",
        "final schema = GraphQLSchema(queryType: objectType('Query', fields: {",
        "  'ping': graphQLString.field(resolve: (_, __) => 'pong'),",
        "}));",
        "print(schema.queryType.name);"
    ].join("\n");
}
