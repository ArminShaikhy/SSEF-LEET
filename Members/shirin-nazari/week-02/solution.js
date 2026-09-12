
const search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] === target)
            return middle;
        if (nums[middle] < target)
            left = middle + 1
        if (nums[middle] > target)
            right = middle - 1
    }
    return -1
};
console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
console.log(search([5], 5)) // 0