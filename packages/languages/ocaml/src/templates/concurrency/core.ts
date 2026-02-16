export function concurrencyTemplate(): string {
  return [
    "open Lwt.Infix",
    "let async_task = Lwt_unix.sleep 0.1 >|= fun () -> ()",
    "let thread = Thread.create (fun () -> ()) ()",
    "let ch = Lwt_stream.create ()",
    "ignore (async_task, thread, ch)"
  ].join("\n");
}
