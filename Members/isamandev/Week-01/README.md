# Week 01 — My Solution

**Author:** Saman Abbasi
**Language:** JavaScript (Node.js)  
**Approach:** Simple iteration with string concatenation

---

## Idea

The solution iterates from 1 to `n` and builds the output string by checking divisibility conditions:

- If the number is divisible by 3, append "Fizz" to the output
- If the number is divisible by 5, append "Buzz" to the output
- If neither condition is met, use the number itself as a string

The approach uses **string concatenation** with the `||` operator as a fallback mechanism. When `output` remains an empty string (meaning no divisibility conditions were met), the fallback `String(i)` is used instead.

The program is wrapped in an **async function** to handle user input via Node.js readline interface, making it interactive.

---

## Complexity

- Time: **O(n)** — Single loop from 1 to n, each iteration performs constant-time operations
- Space: **O(n)** — Storing all n results in an array

---

## Files

- `solution.js` — main solution with interactive input
