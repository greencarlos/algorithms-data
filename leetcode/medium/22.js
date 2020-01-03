"use strict"
// https://leetcode.com/problems/generate-parentheses/

/* Given n pairs of parentheses, 
write a function to generate all combinations of well-formed parentheses.
For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
**/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const results = []
  findCombos("", n, results, 0, 0, 0)
  return results
};

function findCombos(current, n, results, openCount, closeCount, balance) {
  if (openCount == n && openCount == closeCount) {
    results.push(current.slice(0))
    return
  }

  if (openCount > n || closeCount > n || balance < 0) {
    return
  }

  findCombos(current + '(' , n, results, openCount + 1, closeCount, balance + 1);
  findCombos(current + ')', n, results, openCount, closeCount + 1, balance - 1);
}

const grid = [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

console.log(generateParenthesis(3), grid)
