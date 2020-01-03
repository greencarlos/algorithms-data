// https://leetcode.com/problems/rotate-array/

/* Given an array, rotate the array to the right by k steps, 
where k is non-negative.

Example 1:
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]

Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Note:
Try to come up as many solutions as you can,
there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Brute Force
/*var rotate = function(nums, k) {
  let last;
  for (let i = 0; i < k; i++) {
    last = nums.pop()
    nums.unshift(last)
  }
  return nums
}; */


/*var rotate = function(nums, k) {
  let temp = nums.splice(nums.length - k, k)
  let string = ''
  for (let i = temp.length - 1; i >= 0; i--) {
    string += temp[i]
    nums.unshift(string)
    string = ''
  }
  return nums
}*/

var rotate = function(nums, k) {
  let temp = 0
  const len = nums.length;
  k %= len;

  for (let i = 0; i < k; i++) {
    tmp = nums.pop()
    nums.unshift(tmp)
  }
  return nums
}

const input1 = [1,2,3,4,5,6,7]
const input2 = [-1,-100,3,99]

console.log(rotate(input1, 3))
console.log(" ")
console.log([5,6,7,1,2,3,4], 'output 1')
console.log(" ")
console.log("-----")
console.log(" ")
console.log(rotate(input2, 2))
console.log(" ")
console.log([3,99,-1,-100], 'output 2')
