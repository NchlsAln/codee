"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "import akka.http.scaladsl.model.ws.{Message, TextMessage}",
        "import akka.stream.scaladsl.Flow",
        "",
        "val echo = Flow[Message].collect {",
        "  case TextMessage.Strict(text) => TextMessage(s\"echo:$text\")",
        "}",
        "",
        "val route = akka.http.scaladsl.server.Directives.path(\"ws\") {",
        "  akka.http.scaladsl.server.Directives.handleWebSocketMessages(echo)",
        "}"
    ].join("\n");
}
