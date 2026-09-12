/**
 * My first try
*/

// let lastIndex = 0;
// function search(nums: number[], target: number): number {
//   let restNums: number[] = nums;
//   const middle: number = Math.ceil((restNums.length - 1) / 2);
//   const middleEl: number = restNums[Math.ceil((restNums.length - 1) / 2)];
//   if (target < middleEl && restNums.length > 1) {
//     restNums = restNums.slice(0, middle);
//     return search(restNums, target);
//   } else if (target > middleEl && restNums.length > 1) {
//     lastIndex += middle;
//     restNums = restNums.slice(middle);
//     return search(restNums, target);
//   } else if (target === middleEl) {
//     lastIndex += middle;
//     const find = lastIndex;
//     lastIndex = 0;
//     return find;
//   } else {
//     lastIndex = 0;
//     return -1;
//   }
// }

////////////////////////////////////////////////////////////

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        if (target === nums[mid]) return mid;
        else if (target > nums[mid]) left = mid + 1;
        else right = mid - 1;
    }
    return -1
};