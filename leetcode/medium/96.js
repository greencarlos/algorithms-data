// https://leetcode.com/problems/unique-binary-search-trees/
//

/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

// Binary Search Tree
// left <= root <= right

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
   var dp = new Array(n+1).fill(0) 
  dp[0] = 1
  dp[1] = 1
  var i,j;
  for (i = 2; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      dp[i] += dp[i - j]*dp[j-1]
    }
  }
  return dp[n]
};

console.log(numTrees(3), 5)
console.log(numTrees(4), 14)
