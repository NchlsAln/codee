export function modelServingTemplate(): string {
  return [
    "from fastapi import FastAPI",
    "from pydantic import BaseModel",
    "import numpy as np",
    "",
    "app = FastAPI()",
    "",
    "class PredictionRequest(BaseModel):",
    "    features: list[float]",
    "",
    "class PredictionResponse(BaseModel):",
    "    score: float",
    "",
    "def score(features: list[float]) -> float:",
    "    vector = np.asarray(features, dtype=np.float32)",
    "    return float(vector.mean())",
    "",
    "@app.post('/predict', response_model=PredictionResponse)",
    "def predict(request: PredictionRequest) -> PredictionResponse:",
    "    return PredictionResponse(score=score(request.features))",
  ].join("\n");
}
