/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  nums.sort()
  console.log(nums, 'nums')
};

const nums1 = [1,2,3]
const out1 = [1,3,2]
console.log(nextPermutation(nums1), out1)

const nums2 = [3,2,1] 
const out2 = [1,2,3]
console.log(nextPermutation(nums2), out2)

const nums3 = [1,1,5] 
const out3 = [1,5,1]
console.log(nextPermutation(nums3), out3)

