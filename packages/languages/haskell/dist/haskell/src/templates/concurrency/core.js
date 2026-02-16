"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concurrencyTemplate = concurrencyTemplate;
function concurrencyTemplate() {
    return [
        "import Control.Concurrent",
        "import Control.Concurrent.Async",
        "import Control.Concurrent.STM",
        "main = do",
        "  _ <- async (threadDelay 1000)",
        "  ch <- newChan",
        "  writeChan ch (1 :: Int)",
        "  _ <- readChan ch",
        "  v <- newTVarIO (0 :: Int)",
        "  atomically $ writeTVar v 1"
    ].join("\n");
}
