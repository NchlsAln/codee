"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return "import org.springframework.web.socket.TextMessage;\nimport org.springframework.web.socket.WebSocketSession;\nimport org.springframework.web.socket.handler.TextWebSocketHandler;\n\npublic class EchoSocket extends TextWebSocketHandler {\n  @Override\n  protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {\n    session.sendMessage(new TextMessage(\"echo: \" + message.getPayload()));\n  }\n}\n";
}
