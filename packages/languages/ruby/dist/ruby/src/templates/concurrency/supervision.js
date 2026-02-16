"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supervisionTemplate = supervisionTemplate;
function supervisionTemplate() {
    return [
        "require 'concurrent'",
        "pool = Concurrent::FixedThreadPool.new(2)",
        "pool.post { puts 'worker' }",
        "pool.shutdown",
        "pool.wait_for_termination"
    ].join("\n");
}
