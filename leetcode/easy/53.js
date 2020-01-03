// https://leetcode.com/problems/maximum-subarray/

/* Given an integer array nums, find the contiguous subarray
(containing at least one number) which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

If you have figured out the O(n) solution,
try coding another solution using the divide
and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
**/

var maxSubArray = function(nums) {
  var prev = 0
  var max = -Number.MAX_VALUE

  for (var i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(max, prev)
  }
  return max
};

const input1 = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(input1), 6)
