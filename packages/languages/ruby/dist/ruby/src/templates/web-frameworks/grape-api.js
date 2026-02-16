"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grapeApiTemplate = grapeApiTemplate;
function grapeApiTemplate() {
    return [
        "class HealthAPI < Grape::API",
        "  format :json",
        "",
        "  get :health do",
        "    { ok: true }",
        "  end",
        "end"
    ].join("\n");
}
