# Week 02 — Binary Search Solution

**Author:** Saman Abbasi  
**Language:** JavaScript (Node.js)  
**Approach:** Classic binary search algorithm with O(log n) complexity

---

## Idea

The solution implements the **binary search** algorithm to efficiently find a target value in a sorted array. The core idea is to repeatedly divide the search interval in half:

1. **Initialize pointers**: Start with `left = 0` (first index) and `right = array.length - 1` (last index)

2. **While loop**: Continue searching while `left <= right`:
   - Calculate the middle index: `mid = Math.floor((left + right) / 2)`
   - Compare `array[mid]` with the `target`:
     - If equal → **found!** Return the index `mid`
     - If `array[mid] < target` → target is in the **right half** → move `left = mid + 1`
     - If `array[mid] > target` → target is in the **left half** → move `right = mid - 1`

3. **Not found**: If the loop ends without finding the target, return `-1`

The algorithm uses **Math.floor** for integer division to ensure proper index calculation. The solution includes comprehensive test cases covering various scenarios including single-element arrays and missing targets.

---

## Complexity

- Time: **O(log n)** — Each iteration reduces the search space by half
- Space: **O(1)** — Only uses a few variables for pointers, no extra data structures

---

## Files

- `solution.js` — main solution with binary search implementation and test cases
