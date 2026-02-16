export function routingTemplate(): string {
  return [
    "require 'sinatra'",
    "get '/health' do",
    "  content_type :json",
    "  { ok: true }.to_json",
    "end"
  ].join("\n");
}
