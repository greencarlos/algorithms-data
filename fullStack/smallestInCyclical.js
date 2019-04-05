/* Question 1): Search a sorted array for entry equals to its index.
Let’s say there is only one element that meets this condition in the input array. 

Example:
1) Input: [-3, 0, 2, 5, 6]
   Output: 2

2) Input: [-1,-2,1,2,3,5]
    Output: 5
*/


// LINEAR SEARCHING
/*
// FOR LOOP
const solution = (nums) => {
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === i) {
    return i
    }
  }
  return -1
} 

// RECURSION

const solution = (nums, i = 0) => {
  if (i === nums.length) return -1
  if (nums[i] === i) return i
  return solution(nums, i + 1)
}

// WHILE LOOP
const solution = (nums) => {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === i) {
    return i
    }
  i++
  }
  return -1
} */

// BINARY SEARCH

const solution = () => {}

console.log(solution([-3, 0, 2, 5, 6]), 2)
// 2

console.log(solution([-1,-2,1,2,3,5]), 5)
// 5
