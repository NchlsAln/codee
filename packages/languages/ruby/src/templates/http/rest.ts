export function httpRestTemplate(): string {
  return [
    "require 'sinatra'",
    "get '/users/:id' do",
    "  content_type :json",
    "  { id: params['id'] }.to_json",
    "end"
  ].join("\n");
}
