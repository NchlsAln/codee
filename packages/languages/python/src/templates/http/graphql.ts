export function httpGraphqlTemplate(): string {
  return [
    "from gql import Client, gql",
    "from gql.transport.requests import RequestsHTTPTransport",
    "",
    "transport = RequestsHTTPTransport(url='https://example.com/graphql')",
    "client = Client(transport=transport, fetch_schema_from_transport=True)",
    "",
    "query = gql('query { health { ok } }')",
    "result = client.execute(query)",
    "print(result)"
  ].join("\n");
}
