// https://leetcode.com/problems/sum-root-to-leaf-numbers/

/* 
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
An example is the root-to-leaf path 1->2->3 which represents the number 123.
Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25

Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Therefore, sum = 12 + 13 = 25.

Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026

Explanation:

The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.

Therefore, sum = 495 + 491 + 40 = 1026.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/

/*
  1
 / \
2   3
*/

const one = {val: 1}
const two = {val: 2}
const three = {val: 3}

one.left = two
one.right = three

/*
    4
   / \
  9   0
 / \
5   1
*/

const four = {val: 4}
const nine = {val: 9}
const zero = {val: 0}
const five = {val: 5}
const one1 = {val: 1}

four.left = nine
four.right = zero

nine.left = five
nine.right = one1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/
var sumNumbers = function(root) {
  let totalSum = 0

  function bfs(node, number) {
    if (!node.left && !node.right) {
      totalSum += parseInt(number + node.val.toString())
    } else {
      if (node.left) {
        bfs(node.left, number + node.val.toString())
      }
      if (node.right) {
        bfs(node.right, number + node.val.toString())
      }
    }
  }

  if (root) {
    bfs(root, '')
  }
  return totalSum
};


console.log(sumNumbers(one), 25)
console.log(sumNumbers(four), 1026)
