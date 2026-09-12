function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // keep searching while the range is not empty
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // if the middle is smaller, the target is on the right half
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
