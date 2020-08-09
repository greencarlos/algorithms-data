/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
**/

// Brute Force
// Time O(n^2) & Space O(1) 
/*
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};
*/

// Hash Table
// Time & Space O(n)
var twoSum = function(nums, target) {}

/*

a + b = c
nums[i] + nums[j] === target


target - nums[i]
c - b = a

index    0, 1, 2,  3
nums1 = [2, 7, 11, 15];
target = 9

hash = {
  2 : 0, // 9 - 2 = 
}


Ex. 2

index    0, 1, 2, 3
nums2 = [1, 3, 1, 2]
target = 5

hash = {

}

*/

//            0,  1,  2, 3
const nums1 = [2, 7, 11, 15];
const target1 = 9;
// Because nums[0] + nums[1] = 2 + 7 = 9,
console.log(twoSum(nums1, target1), [0, 1]);

const nums2 = [1, 3, 1, 2]
const target2 = 5
// nums[1] + nums[3]
console.log(twoSum(nums2, target2), [1, 3])
