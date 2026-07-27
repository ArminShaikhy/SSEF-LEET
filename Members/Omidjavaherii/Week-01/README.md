# Week 01 — My Solution

**Author:** Omid Javaheri  
**Language:** JavaScript  
**Approach:** Simulation

---

## Idea

Iterate from `1` to `n` and check each number in order.

- If the number is divisible by both `3` and `5`, add `"FizzBuzz"`.
- Otherwise, if it is divisible by `3`, add `"Fizz"`.
- Otherwise, if it is divisible by `5`, add `"Buzz"`.
- If none of the above conditions are met, convert the number to a string and add it to the result array.

Checking divisibility by `15` first ensures that numbers divisible by both `3` and `5` are correctly labeled as `"FizzBuzz"`.

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`

## Files

- `solution.js` — Main solution