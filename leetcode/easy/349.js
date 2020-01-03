//https://leetcode.com/problems/intersection-of-two-arrays/

/**
Given two arrays, 
write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

Note: 
Each element in the result must be unique.
The result can be in any order.
**/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
**/

var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let res = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i]))
      res.add(nums2[i])
  }

  return Array.from(res)
};

const arr1 = [1,2,2,1]
const arr2 = [2,2]
console.log(intersection(arr1, arr2), [2])

const arr3 = [4, 9, 5]
const arr4 = [9, 4, 9, 8, 4]
console.log(intersection(arr3, arr4), [9,4])
