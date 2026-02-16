"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "require 'sinatra'",
        "get '/users/:id' do",
        "  content_type :json",
        "  { id: params['id'] }.to_json",
        "end"
    ].join("\n");
}
