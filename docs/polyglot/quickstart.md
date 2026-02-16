# Polyglot Quickstart

Get your first cross-language conversion in 5 minutes.

Supported languages: Python, TypeScript, Rust, Go, Java, and C++.

## Install Codee (VSIX)
1. In VS Code, open the Extensions view.
2. Choose Install from VSIX.
3. Select the latest codee-vscode.vsix.

## Install Ollama + Recommended Model
1. Install Ollama: https://ollama.com
2. Pull a model (recommended: wizardcoder):
   ```bash
   ollama pull wizardcoder
   ```
3. Confirm Ollama is running.

## First Conversion (5 minutes)
1. Create demo.py:
   ```python
   squares = [x**2 for x in range(10) if x % 2 == 0]
   ```
2. Select the line.
3. Run Codee: Convert to Rust.
4. Review the diff and Apply.

## Next Steps
- Open Pattern Explorer to compare idioms.
- Enable Learning Mode to get suggestions as you code.
- Add patterns to your learning queue for quick review.
