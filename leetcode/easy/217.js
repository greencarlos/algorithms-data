// https://leetcode.com/problems/contains-duplicate/

/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least 
twice in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
};

const input1 = [1,2,3,1]
const input2 = [1,2,3,4]
const input3 = [1,1,1,3,3,4,3,2,4,2]

console.log(containsDuplicate(input1), true)
console.log(containsDuplicate(input2), false)
console.log(containsDuplicate(input3), true)
