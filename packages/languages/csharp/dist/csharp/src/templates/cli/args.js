"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "using System.CommandLine;",
        "",
        "var root = new RootCommand();",
        "var port = new Option<int>(\"--port\", () => 8080);",
        "root.AddOption(port);",
        "root.SetHandler(p => Console.WriteLine(p), port);",
        "return root.Invoke(args);"
    ].join("\n");
}
