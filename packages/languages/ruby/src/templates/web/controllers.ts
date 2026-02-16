export function controllerTemplate(): string {
  return [
    "class HealthController < ApplicationController",
    "  def index",
    "    render json: { ok: true }, status: :ok",
    "  end",
    "end"
  ].join("\n");
}
