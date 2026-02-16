"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sinatraRouteTemplate = sinatraRouteTemplate;
function sinatraRouteTemplate() {
    return [
        "require 'sinatra'",
        "",
        "get '/health' do",
        "  content_type :json",
        "  { ok: true }.to_json",
        "end"
    ].join("\n");
}
