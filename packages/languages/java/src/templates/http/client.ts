export function httpClientTemplate(): string {
  return "import java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\npublic class HttpClientSample {\n  public static void main(String[] args) throws Exception {\n    HttpClient client = HttpClient.newHttpClient();\n    HttpRequest request = HttpRequest.newBuilder(URI.create(\"https://example.com/health\")).build();\n    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n    System.out.println(response.body());\n  }\n}\n";
}
