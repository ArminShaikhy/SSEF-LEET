const search = (nums, target) => {
    let firstIndex = 0
    let lastIndex = nums.length - 1
    while(firstIndex <= lastIndex){
        const mid = Math.floor((firstIndex + lastIndex) / 2)
        if(nums[mid] === target) return mid
        else if (nums[mid] < target) firstIndex = mid + 1
        else lastIndex = mid - 1
     }
    return -1
}

console.log(search([-1,0,3,5,9,12], 9))