export function websocketsTemplate(): string {
  return [
    "-module(chat_ws).",
    "-export([init/2, websocket_handle/2]).",
    "init(Req, State) -> {cowboy_websocket, Req, State}.",
    "websocket_handle({text, Msg}, State) ->",
    "  {reply, {text, Msg}, State}."
  ].join("\n");
}
