// https://leetcode.com/problems/two-sum/

/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// BRUTE FORCE O(n^2)
/* var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};*/

var twoSum = function(nums, target) {
  var hash = {}

  for (let i = 0; i < nums.length; i++) {

    if (hash[target-nums[i]]) {
        return [i,nums.indexOf(target-nums[i])]
    }
    hash[nums[i]] = true
  }
};


// UTILIZING A HASH TABLE
/* const twoSum = (nums, target) => {
  const map = {};
  const len = nums.length;
  map[target - nums[0]] = 0;
  for (let i = 1; i < len; i++) {
    const n = nums[i];
    if (n in map) return [map[n], i];
     map[target-n] = i;
 }
}*/

// HASH table proper
var twoSum = function(nums, target) {
  let numIndex = new Map()
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i]

    if (numIndex.has(comp)) {
      result[0] = numIndex.get(comp)
      result[1] = i
      return result
    }
    numIndex.set(nums[i], i)
  }
  return result
}


const input1 = [-2,1,-3,4,-1,2,1,-5,4]
const input2 = [2,7,11,15]
const input3 = [2, 5, 7, 4];

console.log(twoSum(input1, 6), [3, 5])
console.log(twoSum(input2, 9), [0, 1])
console.log(twoSum(input3, 9), [0, 2])
