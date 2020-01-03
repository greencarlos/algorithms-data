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
  return nums.reduce((prev, curr) => prev ^ curr, 0)
};

const arr1 = [2,2,1]
const arr2 = [4,1,2,1,2]

console.log(singleNumber(arr1), 1)
console.log(singleNumber(arr2), 4)
