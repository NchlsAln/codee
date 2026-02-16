export function routingTemplate(): string {
  return [
    "var builder = WebApplication.CreateBuilder(args);",
    "var app = builder.Build();",
    "",
    "app.MapGet(\"/health\", () => Results.Ok(\"ok\"));",
    "app.MapGet(\"/users/{id:int}\", (int id) => Results.Ok($\"user:{id}\"));",
    "",
    "app.Run();"
  ].join("\n");
}
