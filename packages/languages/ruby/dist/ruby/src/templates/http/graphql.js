"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "require 'graphql'",
        "schema = GraphQL::Schema.define do",
        "  query(GraphQL::ObjectType.define do",
        "    name 'Query'",
        "    field :ping, types.String do",
        "      resolve ->(_obj, _args, _ctx) { 'pong' }",
        "    end",
        "  end)",
        "end"
    ].join("\n");
}
