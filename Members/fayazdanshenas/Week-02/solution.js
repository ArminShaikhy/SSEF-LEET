var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while(lo < hi) {
      let mid =  Math.floor((lo + hi + 1) / 2);
      if(target < nums[mid]) {
          hi = mid-1
      }else {
          lo= mid;
      }
    }
     return nums[lo]==target?lo:-1;
  };