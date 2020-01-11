// https://leetcode.com/problems/degree-of-an-array/

/*
Given a non-empty array of non-negative integers nums,
the degree of this array is defined as the maximum frequency
of any one of its elements.

Your task is to find the smallest possible length of a
(contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2

Explanation:
The input array has a degree of 2 because both elements
1 and 2 appear twice.

Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
*/
var findShortestSubArray = function(nums) {
  let obj = {}
  let max = 0
  let result = nums.length

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = [i]
    } else {
      let t = obj[nums[i]]
      t.push(i)
      obj[nums[i]] = t
    }
  }

  for (let [key, value] of Object.entries(obj)) {
    if (value.length === max) {
      result = Math.min(result, value[value.length - 1] - value[0] + 1)
    }
    if (value.length > max) {
      result = value[value.length - 1] - value[0] + 1
      max = value.length
    }
  }
  return result
}

const input1 =  [1, 2, 2, 3, 1]
const output1 = 2

const input2 = []
const output2 = 0

const input3 = [1,2,2,3,1,4,2]
const output3 = 6

console.log(findShortestSubArray(input1), output1)
console.log(findShortestSubArray(input2), output2)
console.log(findShortestSubArray(input3), output3)
