# Polyglot Demo Script

This script doubles as a validation checklist and a guided onboarding walkthrough for beta users.

## Prerequisites
- Ollama is installed and running.
- Recommended model is pulled (see quickstart).
- Codee VS Code extension is installed and enabled.
- A workspace folder is open in VS Code.

## Demo Part 1: Inline Conversions (3 examples)

### Example A: Python list comprehension -> Rust
1. Create a file named demo.py with the following:
   ```python
   squares = [x**2 for x in range(10) if x % 2 == 0]
   ```
2. Select the line and run the command: Codee: Convert to Rust.
3. Review the diff, then Apply.

Checklist
- [ ] Shows Rust iterator chain with .iter(), .filter(), .map(), .collect().
- [ ] Diff view opens before apply.
- [ ] Conversion warns if confidence < 0.7.

### Example B: Python dataclass -> TypeScript interface
1. Add to demo.py:
   ```python
   from dataclasses import dataclass

   @dataclass
   class User:
       name: str
       age: int
   ```
2. Select the class block and run Codee: Convert to TypeScript.
3. Review the diff, then Apply.

Checklist
- [ ] Output is a TypeScript interface.
- [ ] Field types are string and number.

### Example C: Python try/except -> Rust Result handling
1. Add to demo.py:
   ```python
   try:
       result = risky_operation()
   except ValueError as e:
       print(f"Error: {e}")
   ```
2. Select the block and run Codee: Convert to Rust.

Checklist
- [ ] Output contains Result handling with Err branch.
- [ ] Warns if confidence < 0.7.

## Demo Part 2: Pattern Explorer
1. Run Codee: Open Pattern Explorer.
2. Browse categories: Control Flow, Data Structures, Concurrency, Paradigms.
3. Select a pattern (e.g., Data Structures -> List).
4. Compare Python and Rust snippets.
5. Click Learn this pattern.

Checklist
- [ ] Categories and patterns load.
- [ ] Side-by-side snippets render.
- [ ] Learning queue updates.
- [ ] Semantic differences and "Why this way?" appear.

## Demo Part 3: Learning Mode
1. Run Codee: Learning Mode to enable it.
2. Add a pattern in a file (e.g., list comprehension or async/await).
3. Save the file.

Checklist
- [ ] Suggestion appears with target language example.
- [ ] "Add to Learning Queue" updates the queue.
- [ ] "Open Pattern Explorer" focuses the explorer view.

## Expected Results
- Conversions open a diff view and apply safely.
- Pattern Explorer shows implementations for Python, TypeScript, Rust.
- Learning Mode suggests cross-language equivalents after save.
- Warnings appear for low-confidence or large selections.

## Troubleshooting
- If no conversion appears, ensure the selection is non-empty and language is Python/TypeScript/Rust.
- If the model is offline, check Ollama status and installed model.
- If Pattern Explorer is empty, reload the window and re-open the view.
- If conversions warn about size, split the selection into smaller blocks.
