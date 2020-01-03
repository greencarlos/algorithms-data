// https://leetcode.com/problems/factorial-trailing-zeroes/

/* 
Given an integer n, return the number of trailing zeroes in n!.

Example 1:
Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  // count the numbers of 5 in n!
  // ex. 25, ans = (25/5) + (5/5) = 6
  var ans = 0
  for (i = n; i > 0; i = Math.floor(i/5)) {
    ans += Math.floor(i/5);
  }
  return ans
};

console.log(trailingZeroes(3), 0)
console.log(trailingZeroes(5), 1)
