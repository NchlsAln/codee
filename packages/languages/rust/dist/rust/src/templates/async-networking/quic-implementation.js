"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicImplementationTemplate = quicImplementationTemplate;
function quicImplementationTemplate() {
  return [
    "// QUIC with quinn",
    "// use quinn::{Endpoint, ServerConfig};",
    "// Configure TLS and create endpoint",
    "// Accept bi-directional streams and handle HTTP/3",
  ].join("\n");
}
