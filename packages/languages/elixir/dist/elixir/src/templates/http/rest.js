"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "defmodule UserController do",
        "  use Phoenix.Controller",
        "  def show(conn, %{'id' => id}) do",
        "    json(conn, %{id: id})",
        "  end",
        "end"
    ].join("\n");
}
