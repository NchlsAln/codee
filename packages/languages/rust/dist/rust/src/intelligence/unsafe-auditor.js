"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsafeAuditor = void 0;
exports.unsafeAuditor = {
  overview: "Audit unsafe blocks and recommend safer alternatives.",
  checks: ["raw pointer deref", "FFI boundary", "MaybeUninit usage"],
  recommendations: [
    "Wrap unsafe blocks in safe abstractions",
    "Document invariants and safety contracts",
    "Use Miri and sanitizers",
  ],
};
