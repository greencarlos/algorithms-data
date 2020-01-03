// https://leetcode.com/problems/longest-univalue-path/

/* Given a binary tree, find the length of the longest path 
where each node in the path has the same value. 

This path may or may not pass through the root.

The length of path between two nodes is represented 
by the number of edges between them.

Example 1:
Input:

    5
   / \
  4   5
 / \   \
1   1   5
Output: 2


Example 2:
Input:

    1
   / \
  4   5
 / \   \
4   4   5
Output: 2 */

const a = {val: 5}
const b = {val: 4}
const c = {val: 5}
const d = {val: 1}
const e = {val: 1}
const f = {val: 5}

a.left = b
a.right = c

b.left = d
b.right = e

c.right = f

const one = {val: 1}
const four = {val: 4}
const four2 = {val: 4}
const four3 = {val: 4}
const five = {val: 5}
const five2 = {val: 5}

one.left = four
one.right = five

four.left = four2
four.right = four3

five.right = five2

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
var longestUnivaluePath = function(root) {
  var helper = function(node) {
    if (!node) {
      return 0;
    }

    var left = helper(node.left);
    var right = helper(node.right);
    
    if (node.left) {
      left += node.left.val === node.val ? 1 : -left;
    }

    if (node.right) {
      right += node.right.val === node.val ? 1 : -right;
    }

    max = Math.max(max, left + right);

    return Math.max(left, right);
  }

  var max = 0
  helper(root)
  return max;
};

console.log(longestUnivaluePath(a), 2)
console.log(longestUnivaluePath(one), 2)

