"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return [
        "import io.circe._",
        "import io.circe.parser._",
        "import io.circe.syntax._",
        "",
        "case class User(id: Int, name: String)",
        "implicit val encoder: Encoder[User] = Encoder.forProduct2(\"id\", \"name\")(u => (u.id, u.name))",
        "val json = User(1, \"Ada\").asJson.noSpaces",
        "val parsed = parse(json)",
        "println(parsed)"
    ].join("\n");
}
