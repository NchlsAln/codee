"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.railsControllerTemplate = railsControllerTemplate;
function railsControllerTemplate() {
    return [
        "class HealthController < ApplicationController",
        "  def show",
        "    render json: { ok: true }",
        "  end",
        "end"
    ].join("\n");
}
