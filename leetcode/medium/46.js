// https://leetcode.com/problems/permutations/

/* 
Given a collection of distinct integers,
return all possible permutations.

Input: [1,2,3]

Output: [
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
**/

var permute = function(nums) {
  const arr = []
  _permute(arr, [], nums)
  return arr
}

const _permute = (arr, tempArr, nums) => {
  if (tempArr.length === nums.length) {
    arr.push(tempArr.slice())
  } else {
    nums.map(n => {
      if (tempArr.indexOf(n) === -1) {
        tempArr.push(n)
        _permute(arr, tempArr, nums)
        tempArr.pop()
      }
    })
  }
}

const input1 = [1,2,3]

const output1 = [
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

console.log(permute(input1), 'output: ', output1)
