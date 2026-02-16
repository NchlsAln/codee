"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemsTemplate = systemsTemplate;
function systemsTemplate() {
    return [
        "import GHC.Stats",
        "import System.Environment (lookupEnv)",
        "foreign import ccall \"abs\" c_abs :: Int -> Int",
        "main = do",
        "  _ <- getRTSStatsEnabled",
        "  _ <- lookupEnv \"HOME\"",
        "  print (c_abs (-3))"
    ].join("\n");
}
