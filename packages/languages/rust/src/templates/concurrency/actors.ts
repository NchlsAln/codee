export function actorsTemplate(): string {
  return [
    "use actix::prelude::*;",
    "",
    "struct Printer;",
    "impl Actor for Printer { type Context = Context<Self>; }",
    "",
    "struct Print(pub i32);",
    "impl Message for Print { type Result = (); }",
    "",
    "impl Handler<Print> for Printer {",
    "    type Result = ();",
    "    fn handle(&mut self, msg: Print, _: &mut Context<Self>) {",
    "        println!(\"{}\", msg.0);",
    "    }",
    "}",
    "",
    "let addr = Printer.start();",
    "addr.do_send(Print(42));"
  ].join("\n");
}
