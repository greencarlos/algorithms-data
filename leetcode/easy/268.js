// https://leetcode.com/problems/missing-number/

/* Given an array containing n distinct numbers taken from 
0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8 */

/**
 *  * @param number[]} nums
 *   * @return number}
 *    */
var missingNumber = function(nums) {
  let sum = 0;
  let total = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    total += i + 1
  }
  return total - sum
};

const input1 = [3,0,1]
const input2 = [9,6,4,2,3,5,7,0,1]

console.log(missingNumber(input1), 2)
console.log(missingNumber(input2), 8)

