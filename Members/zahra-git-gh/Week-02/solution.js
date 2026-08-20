function binarySearch(sortedArray, target) {
  if (sortedArray.length < 1 || sortedArray.length > 10 ** 4)
    return "Input is out of range.";
  let start = 0;
  let end = sortedArray.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === target) return mid;
    else if (sortedArray[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));
console.log(binarySearch([5], 5));
