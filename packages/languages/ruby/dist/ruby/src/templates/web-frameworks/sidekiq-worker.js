"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sidekiqWorkerTemplate = sidekiqWorkerTemplate;
function sidekiqWorkerTemplate() {
    return [
        "class ReportWorker",
        "  include Sidekiq::Worker",
        "",
        "  def perform(report_id)",
        "    # work",
        "  end",
        "end"
    ].join("\n");
}
