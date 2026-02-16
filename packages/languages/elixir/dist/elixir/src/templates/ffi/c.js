"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return [
        "defmodule Native do",
        "  @on_load :load",
        "  def load, do: :erlang.load_nif('native', 0)",
        "end"
    ].join("\n");
}
