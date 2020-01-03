//https://leetcode.com/problems/move-zeroes/

/*
Given an array nums, write a function to move
all 0's to the end of it while maintaining the
relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations. */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/

/*
var moveZeros = function(nums) {
  var idx = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i]
      nums[i] = idx === i ? nums[i] : 0
      idx++
    }
  }
}*/

var moveZeros = function(nums) {
  let i = 0
  let j = nums.length - 1

  while(i < j) {
  let left = nums[i]
  let right = nums[j]

    if (left === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
    if (left > 0 || left < 0) {
      i++;
    }
    if (right === 0) {
    j--;
    }

  }
  
  return nums
}

console.log(moveZeros([0,1,0,3,12]), [1,3,12,0,0])
console.log(moveZeros([0,1,0,0,2,0]), [1,2,0,0,0,0])
console.log(moveZeros([-1, 0, 2, -1, 0, -2]), [-1, 2, -1, -2, 0, 0])
