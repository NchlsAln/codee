"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiTemplate = ffiTemplate;
function ffiTemplate() {
    return [
        "{-# LANGUAGE ForeignFunctionInterface #-}",
        "foreign import ccall \"puts\" c_puts :: String -> IO Int",
        "main = do",
        "  _ <- c_puts \"hi\"",
        "  pure ()"
    ].join("\n");
}
