"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiTemplate = ffiTemplate;
function ffiTemplate() {
    return [
        "{-# LANGUAGE ForeignFunctionInterface #-}",
        "foreign import ccall \"math.h sqrt\" c_sqrt :: Double -> Double",
        "main = print (c_sqrt 9)"
    ].join("\n");
}
