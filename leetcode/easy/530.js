// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

/* Given a binary search tree with non-negative values, 
find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output: 1

Explanation:
The minimum absolute difference is 1, 
which is the difference between 2 and 1 (or between 2 and 3).

Note: There are at least two nodes in this BST.*/

const one = {val: 1}
const three = {val: 3}
const two = {val: 2}

one.right = three
three.left = two

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let nodes = []

  const dfs = (node) => {
    if (!node) return 
    dfs(node.left)
    nodes.push(node.val)
    dfs(node.right)
  }

  dfs(root)
  let result = nodes[1] - nodes[0]
  for (let i = 1; i < nodes.length - 1; i++) {
    result = Math.min(result, nodes[i + 1] - nodes[i])
  }

  return result
};

console.log(getMinimumDifference(one), 1)
