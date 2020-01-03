// https://leetcode.com/problems/binary-tree-level-order-traversal/

/* Given a binary tree, return the level order traversal of 
its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
*/

const three = {val: 3}
const nine = {val: 9}
const twenty = {val: 20}
const teen5 = {val: 15}
const seven = {val: 7}

three.left = nine
three.right = twenty

twenty.left = teen5
twenty.right = seven

nine.left = null
nine.right = null

teen5.left = null
teen5.right = null

seven.left = null
seven.right = null

var levelOrder = function(root) {
  if (!root) return []

  let level = 0
  let next = 1
  let result = [[]]
  let queue = []

  queue.push(root)

  while(queue.length > 0) {
    let curr = queue.shift()

    if (curr.left !== null) {
      queue.push(curr.left)
    }

    if (curr.right !== null) {
      queue.push(curr.right)
    }

    result[level].push(curr.val)
    next--;

    if (next === 0 && queue.length !== 0) {
      level++
      result.push([])
      next = queue.length
    }
  }
  return result 
};

console.log(levelOrder(three))
