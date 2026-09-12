# Binary Search

## Problem

Given a sorted array of integers `nums` and an integer `target`, return the index of `target` if it exists in the array.

If `target` does not exist, return `-1`.

The solution must have `O(log n)` time complexity.

## Approach

We use **Binary Search**.

1. Set `low` to the first index.
2. Set `high` to the last index.
3. Find the middle index.
4. Compare `nums[mid]` with `target`.
5. If they are equal, return `mid`.
6. If `target` is greater, search the right half.
7. If `target` is smaller, search the left half.
8. If the search range becomes empty, return `-1`.

## Complexity

- Time: `O(log n)`
- Space: `O(1)`

## Example

```text
Input:
nums = [-1, 0, 3, 5, 9, 12]
target = 9

Output:
4