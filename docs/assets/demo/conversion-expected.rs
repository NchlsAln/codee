// List comprehension example
let result: Vec<_> = squares.iter().filter(|x| x % 2 == 0).map(|x| x.pow(2)).collect();

// Dataclass example
#[derive(Debug, Clone)]
struct User {
  name: String,
  age: i32,
}

// Error handling example
let result = (|| -> Result<(), Box<dyn std::error::Error>> {
  // ...
  Ok(())
})();
if let Err(err) = result {
  // handle error
}
