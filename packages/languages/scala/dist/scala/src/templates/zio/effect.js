"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zioEffectTemplate = zioEffectTemplate;
function zioEffectTemplate() {
    return [
        "import zio._",
        "",
        "val program: ZIO[Any, Nothing, Unit] =",
        "  ZIO.succeed(\"hi\").flatMap(msg => Console.printLine(msg)).orDie",
        "",
        "object Main extends ZIOAppDefault {",
        "  def run = program",
        "}"
    ].join("\n");
}
