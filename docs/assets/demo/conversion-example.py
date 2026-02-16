# List comprehension example
squares = [x**2 for x in range(10) if x % 2 == 0]

# Dataclass example
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int

# Error handling example
try:
    result = risky_operation()
except ValueError as e:
    print(f"Error: {e}")
