export function httpServerTemplate(): string {
  return [
    "var builder = WebApplication.CreateBuilder(args);",
    "var app = builder.Build();",
    "app.MapGet(\"/\", () => \"ok\");",
    "app.Run();"
  ].join("\n");
}
