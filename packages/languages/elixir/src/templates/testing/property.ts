export function propertyTemplate(): string {
  return [
    "defmodule PropTest do",
    "  use ExUnit.Case",
    "  use ExUnitProperties",
    "  property 'reverse twice' do",
    "    check all value <- string(:alphanumeric) do",
    "      assert String.reverse(String.reverse(value)) == value",
    "    end",
    "  end",
    "end"
  ].join("\n");
}
