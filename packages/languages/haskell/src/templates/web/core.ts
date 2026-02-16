export function webTemplate(): string {
  return [
    "import Network.Wai",
    "import Network.Wai.Handler.Warp",
    "import Network.HTTP.Types",
    "app req respond = case pathInfo req of",
    "  [\"health\"] -> respond $ responseLBS status200 [] \"ok\"",
    "  _ -> respond $ responseLBS status404 [] \"not found\"",
    "main = run 8080 app"
  ].join("\n");
}
