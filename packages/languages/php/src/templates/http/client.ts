export function httpClientTemplate(): string {
  return [
    "<?php",
    "use GuzzleHttp\\Client;",
    "",
    "$client = new Client(['base_uri' => 'https://api.example.com']);",
    "$response = $client->get('/health');",
    "echo $response->getBody();"
  ].join("\n");
}
