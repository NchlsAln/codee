export function controllerTemplate(): string {
  return [
    "-module(health_controller).",
    "-export([handle/2]).",
    "handle(Req, State) ->",
    "  Body = <<\"{\\\"ok\\\":true}\">>,",
    "  {ok, cowboy_req:reply(200, #{\"content-type\" => \"application/json\"}, Body, Req), State}."
  ].join("\n");
}
