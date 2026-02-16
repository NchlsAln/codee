export function websocketsTemplate(): string {
  return [
    "require 'faye/websocket'",
    "ws = Faye::WebSocket.new(env)",
    "ws.on :message do |event|",
    "  ws.send(event.data)",
    "end"
  ].join("\n");
}
