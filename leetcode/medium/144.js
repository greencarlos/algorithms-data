// https://leetcode.com/problems/binary-tree-preorder-traversal/

/* Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?*/

const one = {val: 1}
const two = {val: 2}
const three = {val: 3}

one.right = two
two.left = three

console.log(one, 'one')

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const arr = []
   
  const preorder = (node) => {
    if (!node) return
    arr.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }

  preorder(root)
  return arr 
};


console.log(preorderTraversal(one), [1, 2, 3])
