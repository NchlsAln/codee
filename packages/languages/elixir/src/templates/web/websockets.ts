export function websocketsTemplate(): string {
  return [
    "defmodule ChatSocket do",
    "  use Phoenix.Socket",
    "  channel \"room:*\", ChatChannel",
    "end"
  ].join("\n");
}
