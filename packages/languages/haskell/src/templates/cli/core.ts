export function cliTemplate(): string {
  return [
    "import Options.Applicative",
    "import Data.Aeson",
    "import qualified Data.ByteString.Lazy as BL",
    "main = do",
    "  _ <- execParser (info (pure ()) fullDesc)",
    "  _ <- eitherDecode <$> BL.readFile \"config.json\"",
    "  pure ()"
  ].join("\n");
}
