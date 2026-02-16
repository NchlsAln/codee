"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playControllerTemplate = playControllerTemplate;
function playControllerTemplate() {
    return [
        "import javax.inject._",
        "import play.api.mvc._",
        "",
        "@Singleton",
        "class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {",
        "  def index = Action { Ok(\"hello\") }",
        "}"
    ].join("\n");
}
