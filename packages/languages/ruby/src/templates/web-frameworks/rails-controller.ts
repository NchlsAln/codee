export function railsControllerTemplate(): string {
  return [
    "class HealthController < ApplicationController",
    "  def show",
    "    render json: { ok: true }",
    "  end",
    "end"
  ].join("\n");
}
