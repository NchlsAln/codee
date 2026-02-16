"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangRuntime = void 0;
exports.erlangRuntime = {
    runtimeModel: "BEAM VM with lightweight processes, message passing, and supervision trees.",
    packageManager: "Rebar3 with Hex",
    lspServer: "erlang_ls",
    executionModel: ["beam", "otp"]
};
