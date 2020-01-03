// https://leetcode.com/problems/power-of-four/

/*
Given an integer (signed 32 bits), 
write a function to check whether it is a power of 4.

Example 1:
Input: 16
Output: true

Example 2:
Input: 5
Output: false

Follow up: Could you solve it without loops/recursion?
*/

/**
 * @param {number} num
 * @return {boolean}
 */

/* var isPowerOfFour = function(num) {
  if (num <= 0) return false;
  while(num % 4 === 0) {
    num /= 4;
  }
  return num === 1
} */

var isPowerOfFour = function(num) {
  return num > 0 && Math.pow(4, 15) % Math.sqrt(num) === 0
}


console.log(isPowerOfFour(16), true)
console.log(isPowerOfFour(5), false)
console.log(isPowerOfFour(1), true)
console.log(isPowerOfFour(-2147483648), false)
