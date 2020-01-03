// https://leetcode.com/problems/merge-sorted-array/

/* Given two sorted integer arrays nums1 and nums2, 
merge nums2 into nums1 as one sorted array.
The number of elements initialized in nums1 and nums2 are m and n respectively.

You may assume that nums1 has enough space 
(size that is greater or equal to m + n) 
to hold additional elements from nums2.

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6] 
*/

const arr1 = [1,2,3,0,0,0]
const arr2 = [2,5,6]
const output1 = [1,2,2,3,5,6] 
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var len = m + n;
  m--;
  n--;
  while(len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--]
    } else {
      nums1[len] = nums2[n--]
    }
  }
  console.log(arr1, 'arr')
}
console.log(merge(arr1, 3, arr2, 3))
console.log("Output: ", output1)
