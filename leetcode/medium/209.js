// https://leetcode.com/problems/minimum-size-subarray-sum/

/* Given an array of n positive integers and a positive integer s, 
find the minimal length of a contiguous subarray of which the sum ≥ s.
If there isn't one, return 0 instead.

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2

Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, 
try coding another solution of which the time complexity is O(n log n). */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
*/
var minSubArrayLen = function(s, nums) {
  var min = Number.MAX_VALUE

  var l = 0
  var r = -1
  var sum = 0

  while(r < nums.length) {
    if (sum >= s) {
      min = Math.min(min, r - l + 1)
      sum -= nums[l]
      l++
    } else {
      r++
      sum += nums[r]
    }
  }

  return min === Number.MAX_VALUE ? 0 : min
};

const nums1 = [2,3,1,2,4,3]
console.log(minSubArrayLen(7, nums1), 2)
