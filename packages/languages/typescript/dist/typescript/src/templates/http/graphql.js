"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "import { GraphQLClient, gql } from 'graphql-request';",
        "",
        "const client = new GraphQLClient('https://example.com/graphql');",
        "const query = gql`query { health { ok } }`;",
        "const result = await client.request(query);",
        "",
        "console.log(result);"
    ].join("\n");
}
