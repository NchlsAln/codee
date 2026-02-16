"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliTemplate = cliTemplate;
function cliTemplate() {
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
