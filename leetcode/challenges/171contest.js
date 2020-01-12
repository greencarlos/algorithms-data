/*
Given an integer n. No-Zero integer is a positive integer 
which doesn't contain any 0 in its decimal representation.
Return a list of two integers [A, B] where:

A and B are No-Zero integers.
A + B = n
It's guarateed that there is at least one valid solution. 
If there are many valid solutions you can return any of them.

Example 1:
Input: n = 2
Output: [1,1]

Explanation: A = 1, B = 1. A + B = n and both A and B 
don't contain any 0 in their decimal representation.

Example 2:
Input: n = 11
Output: [2,9]

Example 3:
Input: n = 10000
Output: [1,9999]

Example 4:
Input: n = 69
Output: [1,68]

Example 5:
Input: n = 1010
Output: [11,999]
*/

var getNoZeroIntegers = function(n) {
  if (n === 2) return [1, 1]
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; i++) {
      if (i + j === n) {
        return [i, j].sort()
      }
    }
  }
  return []
};

const n1 = 2
const output1 = [1,1]

const n2 = 11
const output2 = [2,9]

const n3 = 10000
const output3 = [1,9999]

const n4 = 69
const output4 = [1,68]

const n5 = 1010
const output5 = [11,999]

console.log(getNoZeroIntegers(n1), n1, output1)
console.log(getNoZeroIntegers(n2), n2, output2)
console.log(getNoZeroIntegers(n3), n3, output3)
console.log(getNoZeroIntegers(n4), n4, output4)
console.log(getNoZeroIntegers(n5), n5, output5)
