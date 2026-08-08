function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    if (nums[i] === target) return i;
    if (nums[i] < target) left = i + 1;
    else right = i - 1;
  }
  return -1;
}