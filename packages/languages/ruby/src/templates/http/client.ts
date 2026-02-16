export function httpClientTemplate(): string {
  return [
    "require 'net/http'",
    "uri = URI('https://api.example.com/health')",
    "res = Net::HTTP.get_response(uri)",
    "puts res.body"
  ].join("\n");
}
