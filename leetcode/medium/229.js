// https://leetcode.com/problems/majority-element-ii/

/*
Given an integer array of size n, find all elements that appear
more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:
Input: [3,2,3]
Output: [3]

Example 2:
Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
*/

var majorityElement = function(nums) {
  var map = new Map()
  var result = []

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  for (var [k, v] of map.entries()) {
    if (v > nums.length / 3) {
      result.push(k)
    }
  }
  return result
};

const input1 = [3,2,3]
const output1 = [3]

const input2 = [1,1,1,3,3,2,2,2]
const output2 = [1,2]

console.log(majorityElement(input1), output1)
console.log(majorityElement(input2), output2)
