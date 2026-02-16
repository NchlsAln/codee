"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTemplate = httpTemplate;
function httpTemplate() {
    return [
        "import Network.HTTP.Client",
        "import Network.HTTP.Client.TLS",
        "main = do",
        "  manager <- newManager tlsManagerSettings",
        "  _ <- httpLbs \"https://example.com\" manager",
        "  pure ()"
    ].join("\n");
}
