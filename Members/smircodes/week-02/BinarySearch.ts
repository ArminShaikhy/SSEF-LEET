var search = function (nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target === nums[mid]) {
      return mid;
    }
  }
  console.log(`left: ${left}, right: ${right}, mid: ${mid}`);
  return -1;
};
