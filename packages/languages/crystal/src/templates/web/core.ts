export function webTemplate(): string {
  return [
    "require \"http/server\"",
    "class LogHandler < HTTP::Handler",
    "  def call(ctx)",
    "    puts ctx.request.path",
    "    call_next(ctx)",
    "  end",
    "end",
    "server = HTTP::Server.new([LogHandler.new]) do |ctx|",
    "  case ctx.request.path",
    "  when \"/health\" then ctx.response.print(\"ok\")",
    "  else ctx.response.status_code = 404",
    "  end",
    "end",
    "server.bind_tcp 8080"
  ].join("\n");
}
