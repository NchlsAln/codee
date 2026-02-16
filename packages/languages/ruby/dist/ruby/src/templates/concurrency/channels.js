"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "queue = Queue.new",
        "queue << 'job-1'",
        "queue << 'job-2'",
        "puts queue.pop",
        "puts queue.pop"
    ].join("\n");
}
