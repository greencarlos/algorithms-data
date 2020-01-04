// https://leetcode.com/problems/majority-element/

/*
Given an array of size n, find the majority element. 
The majority element is the element 
that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and 
the majority element always exist in the array.

Input: [3,2,3]
Output: 3

Input: [2,2,1,1,1,2,2]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map1 = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map1.has(nums[i])) {
      map1.set(nums[i], map1.get(nums[i]) + 1)
    } else {
      map1.set(nums[i], 1)
    }
  }

  for (var [k, v] of map1.entries()) {
    if (v > nums.length/2) {
      return k
    }
  }
};

const input1 = [3,2,3]
const input2 = [2,2,1,1,1,2,2]

console.log(majorityElement(input1), 3)
console.log(majorityElement(input2), 2)
