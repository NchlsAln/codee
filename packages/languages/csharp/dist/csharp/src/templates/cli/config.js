"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "using Microsoft.Extensions.Configuration;",
        "",
        "var config = new ConfigurationBuilder()",
        "  .AddJsonFile(\"appsettings.json\")",
        "  .Build();",
        "Console.WriteLine(config[\"App:Name\"]);"
    ].join("\n");
}
