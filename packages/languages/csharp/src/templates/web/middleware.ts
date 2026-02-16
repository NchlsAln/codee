export function middlewareTemplate(): string {
  return [
    "var builder = WebApplication.CreateBuilder(args);",
    "var app = builder.Build();",
    "",
    "app.Use(async (context, next) => {",
    "  context.Response.Headers[\"X-Request-Id\"] = Guid.NewGuid().ToString();",
    "  await next();",
    "});",
    "",
    "app.MapGet(\"/\", () => \"ok\");",
    "app.Run();"
  ].join("\n");
}
