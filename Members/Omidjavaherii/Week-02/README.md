# Week 02 — My Solution

**Author:** Omid Javaheri  
**Language:** JavaScript  
**Approach:** Binary Search

---

## Idea

Use two pointers (`left` and `right`) on the sorted array and repeatedly check the middle element.

- If `nums[mid]` equals `target`, return `mid`.
- If `nums[mid]` is less than `target`, search the right half by moving `left` to `mid + 1`.
- Otherwise, search the left half by moving `right` to `mid - 1`.

Because the array is sorted and we discard half of the remaining elements each step, the search runs in logarithmic time. If the loop ends without a match, return `-1`.

## Complexity

- **Time:** `O(log n)`
- **Space:** `O(1)`

## Files

- `solution.js` — Main solution
