// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/* Given an array of integers nums sorted in ascending order,
find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = [-1, -1]
  let i = 0
  let j = nums.length - 1

  while(i <= j) {
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] < target) {
      i = mid + 1
    } else if (nums[mid] > target) {
      j = mid - 1
    } else {
      let left = mid
      let right = mid
      while(nums[left] === target && left >= 0) {
        left -= 1
      }
      result[0] = left + 1
      while(nums[right] === target && right < nums.length) {
        right += 1
      }
      result[1] = right - 1
      return result
    }
  }
  return result
};

const nums1 = [5,7,7,8,8,10]
const target1 = 8
const output1 = [3,4]

const nums2 = [5,7,7,8,8,10]
const target2 = 6
const output2 = [-1,-1]

console.log(searchRange(nums1, target1), output1)
console.log(searchRange(nums2, target2), output2)
