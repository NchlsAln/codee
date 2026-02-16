export function integrationTemplate(): string {
  return [
    "require 'net/http'",
    "uri = URI('http://localhost:3000/health')",
    "res = Net::HTTP.get_response(uri)",
    "puts res.code"
  ].join("\n");
}
