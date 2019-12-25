const arr = [-1, 0, 3, 5, 9, 12]
// sorted array

var search = function(nums, target) {
  let left = 0
  let right = nums.length-1;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1 
};

console.log(search(arr, 9), 4)
console.log(search(arr, 2), -1)

