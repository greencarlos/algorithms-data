// https://leetcode.com/problems/path-sum/

/*
Given a binary tree and a sum, determine if the tree has a
root-to-leaf path such that adding up all the values along 
the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

const five = {val: 5}
const four = {val: 4}
const eight = {val: 8}
const eleven = {val:11}
const thirteen = {val: 13}
const four2 = {val: 4}
const seven = {val: 7}
const two = {val: 2}
const one = {val: 1}

five.left = four
five.right = eight

four.left = eleven
eleven.left = seven
eleven.right = two

eight.left = thirteen
eight.right = four2
four2.right = one

console.log(five, 'root')

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

// startDFS === root.val
// do a depth first search
// add up the path
// check whether that value equals our sum
// if it does return true
// otherwise return false
/*
var hasPathSum = function(root, sum) {
  let total = 0
  let start = root.val

  const dfs = (node) => {
    if (!node) return false
    if (node.val === start) {total -= total}
    if (node) {total += node.val}
    if (total === sum) {return true}
    console.log(total, 'total')
    dfs(node.left)
    dfs(node.right)
  }

 return dfs(root)
  //return false 
};
*/

var hasPathSum = function(root, sum, current) {
  if (!root) return false;

  current = current || 0; 
  current += root.val;

  if (!root.left && !root.right) {
    return sum == current
  }

  return hasPathSum(root.left, sum, current) || hasPathSum(root.right, sum, current);
};

console.log(hasPathSum(five, 22), true)
