export function channelsTemplate(): string {
  return [
    "using System.Threading.Channels;",
    "",
    "var channel = Channel.CreateUnbounded<string>();",
    "await channel.Writer.WriteAsync(\"work\");",
    "var value = await channel.Reader.ReadAsync();",
    "Console.WriteLine(value);"
  ].join("\n");
}
