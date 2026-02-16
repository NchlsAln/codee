export function httpGraphqlTemplate(): string {
  return [
    "var builder = WebApplication.CreateBuilder(args);",
    "builder.Services",
    "  .AddGraphQLServer()",
    "  .AddQueryType(d => d.Name(\"Query\").Field(\"ping\").Resolve(\"pong\"));",
    "",
    "var app = builder.Build();",
    "app.MapGraphQL();",
    "app.Run();"
  ].join("\n");
}
