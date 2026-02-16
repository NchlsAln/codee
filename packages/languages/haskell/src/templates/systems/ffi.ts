export function ffiTemplate(): string {
  return [
    "{-# LANGUAGE ForeignFunctionInterface #-}",
    "foreign import ccall \"puts\" c_puts :: String -> IO Int",
    "main = do",
    "  _ <- c_puts \"hi\"",
    "  pure ()"
  ].join("\n");
}
