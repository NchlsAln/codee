"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "using System.Threading.Channels;",
        "",
        "var channel = Channel.CreateUnbounded<string>();",
        "await channel.Writer.WriteAsync(\"work\");",
        "var value = await channel.Reader.ReadAsync();",
        "Console.WriteLine(value);"
    ].join("\n");
}
