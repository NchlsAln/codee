export function cliLoggingTemplate(): string {
  return [
    "using Microsoft.Extensions.Logging;",
    "",
    "using var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());",
    "var logger = loggerFactory.CreateLogger(\"app\");",
    "logger.LogInformation(\"started\");"
  ].join("\n");
}
