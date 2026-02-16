export function pytorchTemplate(): string {
  return [
    "import torch",
    "from torch import nn",
    "",
    "model = nn.Sequential(",
    "    nn.Linear(8, 16),",
    "    nn.ReLU(),",
    "    nn.Linear(16, 1)",
    ")",
    "",
    "x = torch.randn(4, 8)",
    "y = model(x)",
    "print(y.shape)"
  ].join("\n");
}
