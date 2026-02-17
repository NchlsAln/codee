"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consensusSimulationTemplate = consensusSimulationTemplate;
function consensusSimulationTemplate() {
  return [
    "import random",
    "",
    "validators = {'alpha': 10, 'beta': 20, 'gamma': 5}",
    "",
    "def pick_validator() -> str:",
    "    pool = []",
    "    for name, stake in validators.items():",
    "        pool.extend([name] * stake)",
    "    return random.choice(pool)",
    "",
    "counts = {name: 0 for name in validators}",
    "for _ in range(1000):",
    "    counts[pick_validator()] += 1",
    "print(counts)",
  ].join("\n");
}
