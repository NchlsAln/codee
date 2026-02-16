export function liveViewTemplate(): string {
  return [
    "defmodule MyAppWeb.CounterLive do",
    "  use Phoenix.LiveView",
    "",
    "  def mount(_params, _session, socket) do",
    "    {:ok, assign(socket, count: 0)}",
    "  end",
    "",
    "  def handle_event(\"inc\", _params, socket) do",
    "    {:noreply, update(socket, :count, &(&1 + 1))}",
    "  end",
    "end"
  ].join("\n");
}
