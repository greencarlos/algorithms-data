// https://leetcode.com/problems/same-tree/

const a = {val: 1}
const b = {val: 2}
const c = {val: 3}

a.left = b
a.right = c

//    (1)
//    / \
//  (2) (3)

const one = {val: 1}
const two = {val: 2}
const three = {val:3}

one.left = two
one.right = three

//    (1)
//    / \
//  (2) (3)

console.log(a, '', one)


const nice = {val: 10}
const tree = {val: 20}

nice.left = tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/*
var isSameTree = function(p, q) {

    const dfs = (node1, node2) => {
      if (!node1 && !node2)  {return true}
      if (!node1 || !node2) {return false}
      if (node1.val !== node2.val) {return false}
      console.log(node1.val, 'node1')
      console.log(node2.val, 'node2')
      dfs(node1.left, node2.left)
      dfs(node1.right, node2.right)
    }

  dfs(p, q)
  return true
};
*/


var isSameTree = function(p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q || p.val !== q.val) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

console.log(isSameTree(a, one), true)
console.log(isSameTree(a, nice), false)

