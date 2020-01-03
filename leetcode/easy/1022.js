// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

/* Given a binary tree, each node has value 0 or 1.  
Each root-to-leaf path represents a binary number starting with 
the most significant bit.  

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, 
then this could represent 01101 in binary, which is 13.

For all leaves in the tree, 
consider the numbers represented by the path from the root to that leaf.
Return the sum of these numbers. */

const a = {val: 1}
const b = {val: 0}
const c = {val: 1}
const d = {val: 0}
const e = {val: 1}
const f = {val: 0}
const g = {val: 1}

a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g

console.log(a, 'root')

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
var sumRootToLeaf = function(root) {
  var res = 0
  var DFS = (root, S) => {
    if (!root) return
    S += root.val;
    if (!root.left && !root.right) {
      res += parseInt(S, 2)
      return;
    }
    DFS(root.left, S);
    DFS(root.right, S);
  }
  DFS(root, '')
  return res
};

/*Output: 22
Explanation: 
(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
*/

console.log(sumRootToLeaf(a), 22)
