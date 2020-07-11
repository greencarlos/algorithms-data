/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Hash Table
var maxSubArrayLen = function(nums, k) {
  const map = {0:-1}
  let len = 0

  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i]

    if ((sum - k) in map) {
      len = Math.max(len, i - map[sum - k])
    }

    if (!(sum in map)) {
      map[sum] = i
    }
  }
  
  return len
};

const nums1 = [1, -1, 5, -2, 3];
const k1 = 3;
console.log(maxSubArrayLen(nums1, k1), 4);
// Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.

const nums2 = [-2, -1, 2, 1];
const k2 = 1;
console.log(maxSubArrayLen(nums2, k2), 2);
// Explanation: The subarray [-1, 2] sums to 1

const nums3 = [0, 0];
const k3 = 0;
console.log(maxSubArrayLen(nums3, k3), 2);

const nums4 = [-1]
const k4 = -1
console.log(maxSubArrayLen(nums4, k4), 1)
