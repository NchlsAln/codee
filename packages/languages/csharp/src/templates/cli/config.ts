export function cliConfigTemplate(): string {
  return [
    "using Microsoft.Extensions.Configuration;",
    "",
    "var config = new ConfigurationBuilder()",
    "  .AddJsonFile(\"appsettings.json\")",
    "  .Build();",
    "Console.WriteLine(config[\"App:Name\"]);"
  ].join("\n");
}
