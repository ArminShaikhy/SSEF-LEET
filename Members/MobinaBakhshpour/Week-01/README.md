# FizzBuzz

* Language: JavaScript

* Idea:
  I initially solved the problem using `if` / `else if` statements. While reviewing my solution, I realized that instead of checking:

  ```js
  i % 3 === 0 && i % 5 === 0
  ```

  I could simply write:

  ```js
  i % 15 === 0
  ```

  since any number divisible by both `3` and `5` is divisible by `15`.

## Complexity

* **Time Complexity:** `O(N)`
* **Space Complexity:** `O(N)`
