"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tonicGrpcTemplate = tonicGrpcTemplate;
function tonicGrpcTemplate() {
  return [
    "// tonic service skeleton",
    '// tonic_build::compile_protos("proto/service.proto")?;',
    "",
    "#[derive(Default)]",
    "pub struct GreeterService;",
    "",
    "// Implement generated trait for GreeterService",
    "// Use async streaming and interceptors as needed",
  ].join("\n");
}
