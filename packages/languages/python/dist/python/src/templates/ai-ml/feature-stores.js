"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureStoresTemplate = featureStoresTemplate;
function featureStoresTemplate() {
  return [
    "from dataclasses import dataclass",
    "from datetime import datetime",
    "",
    "@dataclass",
    "class FeatureVector:",
    "    entity_id: str",
    "    score: float",
    "    updated_at: datetime",
    "",
    "class InMemoryFeatureStore:",
    "    def __init__(self) -> None:",
    "        self._store: dict[str, FeatureVector] = {}",
    "",
    "    def write(self, vector: FeatureVector) -> None:",
    "        self._store[vector.entity_id] = vector",
    "",
    "    def read(self, entity_id: str) -> FeatureVector | None:",
    "        return self._store.get(entity_id)",
    "",
    "store = InMemoryFeatureStore()",
    "store.write(FeatureVector('user-42', 0.88, datetime.utcnow()))",
    "print(store.read('user-42'))",
  ].join("\n");
}
