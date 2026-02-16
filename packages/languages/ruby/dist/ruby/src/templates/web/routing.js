"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "require 'sinatra'",
        "get '/health' do",
        "  content_type :json",
        "  { ok: true }.to_json",
        "end"
    ].join("\n");
}
