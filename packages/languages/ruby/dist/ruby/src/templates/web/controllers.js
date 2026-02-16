"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerTemplate = controllerTemplate;
function controllerTemplate() {
    return [
        "class HealthController < ApplicationController",
        "  def index",
        "    render json: { ok: true }, status: :ok",
        "  end",
        "end"
    ].join("\n");
}
