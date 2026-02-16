export function sidekiqWorkerTemplate(): string {
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
