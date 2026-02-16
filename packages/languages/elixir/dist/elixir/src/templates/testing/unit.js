"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "defmodule MathTest do",
        "  use ExUnit.Case",
        "  test 'adds' do",
        "    assert 2 + 2 == 4",
        "  end",
        "end"
    ].join("\n");
}
