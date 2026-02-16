export function httpGraphqlTemplate(): string {
  return [
    "-module(graphql_demo).",
    "-export([handle/1]).",
    "handle(Query) ->",
    "  % Placeholder for graphql-erlang integration",
    "  {ok, Query}."
  ].join("\n");
}
