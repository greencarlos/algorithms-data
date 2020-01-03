// https://leetcode.com/problems/diameter-of-binary-tree/

/* Given a binary tree, you need to compute the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
Note: The length of path between two nodes is represented by the number of edges between them.*/

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
**/

const one = {val: 1}
const two = {val: 2}
const three = {val: 3}
const four = {val: 4}
const five = {val: 5}

one.left = two
one.right = three

two.left = four
two.right = five

four.left = null
four.right = null

five.left = null
five.right = null

three.left = null
three.right = null

var diameterOfBinaryTree = function(root) {
  let count = 0

  const dfs = (node) => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    count = Math.max(count, left + right)
    return 1 + Math.max(left, right)
  }

  dfs(root)
  return count
};

console.log(diameterOfBinaryTree(one), 3)
