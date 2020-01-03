// https://leetcode.com/problems/top-k-frequent-elements/

/*
Given a non-empty array of integers, 
return the k most frequent elements.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n),
where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map()
  for (let v of nums) {
    if (!map.has(v)) {
      map.set(v, 1)
    } else {
      map.set(v, map.get(v) + 1)
    }
  }

  let array = []
  for (let [key, value] of map) {
    array.push([key, value])
  }
  array.sort(function(a, b) {
    return b[1] - a[1]
  })

  let result = []
  for (let i = 0; i < k; i++) {
    result.push(array[i][0])
  }
  return result
}

const nums1 = [1,1,1,2,2,3]
const nums2 = [1] 
const nums3 = [1,1,1,2,2,3,3,4,5,6]
const nums4 = [6,4,1,3,2,2,1,1,3]

console.log(topKFrequent(nums1, 2), [1, 2])
console.log(topKFrequent(nums2, 1), [1])
console.log(topKFrequent(nums3, 3), [1,2,3])
console.log(topKFrequent(nums4, 3), [1,2,3])
