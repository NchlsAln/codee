"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "<?php",
        "use GuzzleHttp\\Client;",
        "",
        "$client = new Client(['base_uri' => 'https://api.example.com']);",
        "$response = $client->get('/health');",
        "echo $response->getBody();"
    ].join("\n");
}
