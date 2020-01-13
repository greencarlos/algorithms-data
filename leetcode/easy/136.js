// https://leetcode.com/problems/single-number/

/*
Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
**/

var singleNumber = function(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
    i++
  }
};

const arr1 = [2,2,1]
const arr2 = [4,1,2,1,2]

console.log(singleNumber(arr1), 1)
console.log(singleNumber(arr2), 4)
