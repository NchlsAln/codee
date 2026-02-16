export function httpClientTemplate(): string {
  return [
    "{:ok, response} = Req.get(\"https://api.example.com/health\")",
    "IO.inspect(response.status)"
  ].join("\n");
}
