const array = [1,4,4,7,7,8,11,19,21,23,24,30]
const arr = [-1, 0, 3, 5, 9, 12]

function binarySearch(arr, target) {
  // starting values
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentIndex;
  let currentElement;

  // main loop
  while(minIndex <= maxIndex){
  
  // Get a position near the middle
  currentIndex = Math.floor((minIndex + maxIndex) / 2);

  // Get that element
  //currentElement = arr[currentIndex];
  searchElement = arr[currentIndex];

  // Test it
  if (currentElement < searchElement) {
    // if it's less than we are looking for,
    // look *above* this value
    minIndex = currentIndex + 1;
  }
  else if (currentElement > searchElement) {
  // If it's more than we are looking for,
  // look *below* this value.
  maxIndex = currentIndex - 1;
  } else {
  // We found it; retu
  return currentIndex;
  }
  }
  return false; // worst case run-time
}

/**
 *  * @param number[]} nums
 *   * @param number} target
 *    * @return number}
 *     */
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

// How binary search works? Say given the sorted
// array below - [1,4,4,7,7,8,11,19,21,23,24,30],
// and the target key, 19.

console.log(binarySearch(array, 19), 5)
console.log(search(arr, 9), 4)
console.log(search(arr, 2), -1)

