// https://leetcode.com/problems/array-partition-i/

/*
Given an array of 2n integers, your task is to group these integers
into n pairs of integer, say (a1, b1), (a2, b2), ..., 
(an, bn) which makes sum of min(ai, bi) for all i from 1 to n as 
large as possible.

Example 1:
Input: [1,4,3,2]
Output: 4

Explanation: n is 2, and the maximum sum of
pairs is 4 = min(1, 2) + min(3, 4).
*/

var arrayPairSum = function(nums) {
  nums.sort((a,b) => (a -b))
  let result = 0
  for (let i = 0; i < nums.length; i = i + 2) {
    result += nums[i]
  }
  return result
};

/*
Hint 1:
Obviously, brute force won't help here. 
Think of something else, take some example like 1,2,3,4.

Hint 2:
How will you make pairs to get the result? There must be some pattern.
Did you observe that- Minimum element gets add into the result in
sacrifice of maximum element.

Hint 3:
Still won't able to find pairs? Sort the array and try to find the pattern.
*/

const input1 = [1,4,3,2]
console.log(arrayPairSum(input1), 4)
 
const input2 = [1,1]
console.log(arrayPairSum(input2), 1)

const input3 = [1, 2]
console.log(arrayPairSum(input3), 1)

const input4 = [-470, 66, -4835, -5623]
console.log(arrayPairSum(input4), -6093)
