export function httpTemplate(): string {
  return [
    "require \"http/client\"",
    "res = HTTP::Client.get(\"https://example.com\")",
    "require \"http/server\"",
    "server = HTTP::Server.new do |ctx|",
    "  ctx.response.content_type = \"application/json\"",
    "  ctx.response.print({ok: true}.to_json)",
    "end",
    "server.bind_tcp 8080"
  ].join("\n");
}
