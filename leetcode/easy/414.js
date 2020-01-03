// https://leetcode.com/problems/third-maximum-number/

/*Given a non-empty array of integers, 
return the third maximum number in this array. 

If it does not exist, return the maximum number. 
The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]
Output: 1

Explanation: The third maximum is 1.

Example 2:
Input: [1, 2]
Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: [2, 2, 3, 1]
Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var thirdMax = function(nums) {
  nums = Array.from(new Set(nums))
  var len = nums.length
  if (len <= 2) {
    return Math.max(...nums)
  }
  if (len === 3) {
    return Math.min(...nums)
  }
  nums = nums.sort((a,b) => {return b - a})
  return nums[2]
};
*/
var thirdMax = function(nums) {
  var max = nums[0] 
  var second = -Infinity 
  var third = -Infinity 

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (max < num) {
      third = second
      second = max
      max = num
    } else if (num < max && num > second) {
      third = second
      second = num
    } else if (num < second && num > third) {
      third = num
    }
  }
  return third === -Infinity ? max : third 
}

const input1 = [3, 2, 1]
console.log(input1, 'input')
console.log(thirdMax(input1), 1)
//const input2 = [1, 2]
//console.log(thirdMax(input2), 2)
//const input3 = [2, 2, 3, 1]
//console.log(thirdMax(input3), 1)
