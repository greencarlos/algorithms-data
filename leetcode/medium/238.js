// https://leetcode.com/problems/product-of-array-except-self/
/*
Given an array nums of n integers where n > 1,
return an array output such that output[i] is equal 
to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity?
(The output array does not count as extra space 
for the purpose of space complexity analysis.) 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
**/

var productExceptSelf = function(nums) {
  let p = []
  nums.reduce((sum, value) => {
    p.push(sum)
    sum *= value
    return sum
  }, 1)

  p.reduceRight((sum, value, index) => {
    p[index] = p[index] * sum
    sum *= nums[index]
    return sum
  }, 1)

  return p
};

const input1 = [1,2,3,4]
const output1 = [24,12,8,6]

const input2 = [2,4,1,5,3]
const output2 = [ 60, 30, 120, 24, 40 ]

console.log(productExceptSelf(input1))
console.log(`Output: ${output1}`)
console.log(" ")
console.log(productExceptSelf(input2))
console.log(`Output: ${output2}`)
