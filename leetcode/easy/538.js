// https://leetcode.com/problems/convert-bst-to-greater-tree/

/* Given a Binary Search Tree (BST), convert it to a Tree such 
that every key of the original BST is changed to the original key 
plus sum of all keys greater than the original key in BST.

Example:
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13*/

const five = {val: 5}
const two = {val: 2}
const teen3 = {val: 13}

five.left = two
five.right = teen3

const twenty = {val: 20}
const eighteen = {val: 18}
const thirteen = {val: 13}

eighteen.left = twenty
eighteen.right = thirteen

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let curr = 0

  const dfs = (node) => {
    if (!node) return
    dfs(node.right)
    curr += node.val
    node.val = curr
    dfs(node.left)
  }

  dfs(root)
  return root 
};

console.log(convertBST(five))
console.log(eighteen)

