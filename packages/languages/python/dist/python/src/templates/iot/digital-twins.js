"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalTwinsTemplate = digitalTwinsTemplate;
function digitalTwinsTemplate() {
  return [
    "from dataclasses import dataclass",
    "from datetime import datetime",
    "",
    "@dataclass",
    "class TwinState:",
    "    device_id: str",
    "    temp_c: float",
    "    updated_at: datetime",
    "",
    "class DigitalTwin:",
    "    def __init__(self) -> None:",
    "        self._state: dict[str, TwinState] = {}",
    "",
    "    def update(self, state: TwinState) -> None:",
    "        self._state[state.device_id] = state",
    "",
    "    def read(self, device_id: str) -> TwinState | None:",
    "        return self._state.get(device_id)",
    "",
    "twin = DigitalTwin()",
    "twin.update(TwinState('sensor-9', 22.1, datetime.utcnow()))",
    "print(twin.read('sensor-9'))",
  ].join("\n");
}
