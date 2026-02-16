export function integrationTemplate(): string {
  return [
    "<?php",
    "use PHPUnit\\Framework\\TestCase;",
    "use GuzzleHttp\\Client;",
    "",
    "final class HealthTest extends TestCase",
    "{",
    "  public function testHealthEndpoint(): void",
    "  {",
    "    $client = new Client(['base_uri' => 'http://localhost:8080']);",
    "    $response = $client->get('/health');",
    "    $this->assertSame(200, $response->getStatusCode());",
    "  }",
    "}",
    ""
  ].join("\n");
}
