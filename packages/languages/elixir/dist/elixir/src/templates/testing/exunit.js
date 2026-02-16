"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exUnitTemplate = exUnitTemplate;
function exUnitTemplate() {
    return [
        "defmodule MathTest do",
        "  use ExUnit.Case",
        "",
        "  test \"adds numbers\" do",
        "    assert 2 + 2 == 4",
        "  end",
        "end"
    ].join("\n");
}
