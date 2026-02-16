"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "import Control.Concurrent.STM",
        "main = do",
        "  ch <- newTChanIO",
        "  atomically $ writeTChan ch \"ok\"",
        "  msg <- atomically $ readTChan ch",
        "  putStrLn msg"
    ].join("\n");
}
