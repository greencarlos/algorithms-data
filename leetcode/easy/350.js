// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/* Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Each element in the result should appear as many times as 
it shows in both arrays.
The result can be in any order.

What if the given array is already sorted?
How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? 

Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited 
such that you cannot load all elements into the memory at once? */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const count = {}
 
  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i]
    if (count[curr] == null) {
      count[curr] = 1
    } else {
      count[curr]++
    }
  }

  const result = [] 

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i]
    if (count[curr] > 0) {
      result.push(curr)
      count[curr]--
    }
  }
  return result
};

const numsA = [1,2,2,1]
const numsB = [2,2]

const numsC = [4,9,5]
const numsD = [9,4,9,8,4]

console.log(intersect(numsA, numsB), [2, 2])
console.log(intersect(numsC, numsD), [4, 9])
