"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return [
        "# Rustler NIF example",
        "defmodule Math do",
        "  use Rustler, otp_app: :app, crate: 'math'",
        "  def add(_, _), do: :erlang.nif_error(:nif_not_loaded)",
        "end"
    ].join("\n");
}
