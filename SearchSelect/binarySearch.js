// Binary Search on a sorted array
const arr = [1, 1, 2, 5, 7, 9, 15]
const target = 7

const binarySearch = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while(left <= right) {
    var mid = Math.floor((right + left) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

console.log(binarySearch(arr, target), 4)
