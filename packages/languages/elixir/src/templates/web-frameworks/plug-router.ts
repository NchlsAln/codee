export function plugRouterTemplate(): string {
  return [
    "defmodule MyRouter do",
    "  use Plug.Router",
    "  plug :match",
    "  plug :dispatch",
    "",
    "  get \"/health\" do",
    "    send_resp(conn, 200, \"ok\")",
    "  end",
    "end"
  ].join("\n");
}
