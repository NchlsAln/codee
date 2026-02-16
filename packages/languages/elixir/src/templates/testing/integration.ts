export function integrationTemplate(): string {
  return [
    "defmodule HealthTest do",
    "  use ExUnit.Case",
    "  test 'health endpoint' do",
    "    {:ok, %{status: 200}} = Req.get(\"http://localhost:4000/health\")",
    "  end",
    "end"
  ].join("\n");
}
