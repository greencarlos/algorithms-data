// https://leetcode.com/problems/sum-of-two-integers/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
**/

/* 
Calculate the sum of two integers a and b,
but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
*/

var getSum = function(a, b) {
  if (a === 0) return a;
  if (b === 0) return b;

  while(b) {
    let newA = a^b;
    let newB = (a&b)<<1;
    a = newA;
    b = newB;
  }
  return a;
};

console.log(getSum(1, 2))
console.log('Solution', 3)
console.log(getSum(-2, 3))
console.log('Solution', 1)

