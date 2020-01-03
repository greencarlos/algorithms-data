//https://leetcode.com/problems/maximum-product-of-three-numbers

// Given an integer array, 
// find three numbers whose product is 
// maximum and output the maximum product.

const arr1 = [1,2,3]
const arr2 = [1,2,3,4] 
const arr3 = [10, 20, 30, 1]
const arr4 = [-4, -3, -2, -1, 60]
const arr5 = [-1,-2,-3]
/**
 * @param {number[]} nums
 * @return {number}
**/

var maximumProduct = function(nums) {
  nums = nums.sort(function(a,b){return a -b});
  var max1 = nums[nums.length - 1];
  var max2 = nums[nums.length - 2];
  var max3 = nums[nums.length - 3];
  var min1 = nums[0];
  var min2 = nums[1];
  return Math.max(max1*max2*max3, max1*min1*min2)
};

//console.log(maximumProduct(arr1), 6)

//console.log(maximumProduct(arr2), 24)

//console.log(maximumProduct(arr3), 6000)

console.log(maximumProduct(arr4), 720)
console.log(maximumProduct(arr5), -6)

