export function asyncTemplate(): string {
  return [
    "import Control.Concurrent.STM",
    "main = do",
    "  ch <- newTChanIO",
    "  atomically $ writeTChan ch \"ok\"",
    "  msg <- atomically $ readTChan ch",
    "  putStrLn msg"
  ].join("\n");
}
