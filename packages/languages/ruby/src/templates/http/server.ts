export function httpServerTemplate(): string {
  return [
    "require 'webrick'",
    "server = WEBrick::HTTPServer.new(Port: 8080)",
    "server.mount_proc('/health') { |_, res| res.body = 'ok' }",
    "server.start"
  ].join("\n");
}
