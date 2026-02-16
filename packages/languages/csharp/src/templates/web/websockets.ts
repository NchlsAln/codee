export function websocketsTemplate(): string {
  return [
    "using System.Net.WebSockets;",
    "",
    "var builder = WebApplication.CreateBuilder(args);",
    "var app = builder.Build();",
    "app.UseWebSockets();",
    "",
    "app.Map(\"/ws\", async context => {",
    "  if (!context.WebSockets.IsWebSocketRequest) {",
    "    context.Response.StatusCode = 400;",
    "    return;",
    "  }",
    "  using var socket = await context.WebSockets.AcceptWebSocketAsync();",
    "  var buffer = new byte[1024];",
    "  var result = await socket.ReceiveAsync(buffer, CancellationToken.None);",
    "  await socket.SendAsync(buffer.AsMemory(0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);",
    "});",
    "",
    "app.Run();"
  ].join("\n");
}
