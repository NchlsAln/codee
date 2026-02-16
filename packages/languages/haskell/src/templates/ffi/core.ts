export function ffiTemplate(): string {
  return [
    "{-# LANGUAGE ForeignFunctionInterface #-}",
    "foreign import ccall \"math.h sqrt\" c_sqrt :: Double -> Double",
    "main = print (c_sqrt 9)"
  ].join("\n");
}
