# Binary Search

## Language

JavaScript

## Algorithm

Use **Binary Search** to find the target in the sorted array.

Start with two pointers, `left` and `right`, representing the search range. Check the middle element:

- If it equals the target, return its index.
- If it is smaller than the target, search the right half.
- If it is larger than the target, search the left half.
- If the target is not found, return `-1`.

## Complexity

- **Time:** `O(log n)`
- **Space:** `O(1)`
