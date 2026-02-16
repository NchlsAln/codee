export function actorsTemplate(): string {
  return [
    "defmodule Counter do",
    "  use GenServer",
    "  def start_link(_), do: GenServer.start_link(__MODULE__, 0, name: __MODULE__)",
    "  def init(state), do: {:ok, state}",
    "  def handle_call(:get, _from, state), do: {:reply, state, state}",
    "end"
  ].join("\n");
}
