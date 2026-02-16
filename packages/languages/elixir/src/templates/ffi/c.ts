export function ffiCTemplate(): string {
  return [
    "defmodule Native do",
    "  @on_load :load",
    "  def load, do: :erlang.load_nif('native', 0)",
    "end"
  ].join("\n");
}
