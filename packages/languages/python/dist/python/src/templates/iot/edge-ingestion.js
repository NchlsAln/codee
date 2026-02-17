"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.edgeIngestionTemplate = edgeIngestionTemplate;
function edgeIngestionTemplate() {
  return [
    "import json",
    "import paho.mqtt.client as mqtt",
    "",
    "def on_message(client, userdata, message):",
    "    payload = json.loads(message.payload.decode('utf-8'))",
    "    print('device', payload.get('device_id'), 'temp', payload.get('temp_c'))",
    "",
    "client = mqtt.Client()",
    "client.on_message = on_message",
    "client.connect('mqtt.example.com', 1883)",
    "client.subscribe('devices/+/telemetry')",
    "client.loop_forever()",
  ].join("\n");
}
