// https://leetcode.com/problems/range-sum-of-bst/
"use strict"
/*938. Range Sum of BST
Favorite

Share
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.



Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
*/

// Example 1
const a = {val:10}
const b = {val: 5}
const c = {val: 3}
const d = {val: 7}
const e = {val: 15}
const f = {val: 18}

a.left = b
b.left = c

b.right = d
a.right = e

e.right = f

// Example 2
const ten = {val: 10}
const five = {val: 5}
const three = {val: 3}
const one = {val: 1}
const seven = {val: 7}
const six = {val: 6}
const teen15 = {val: 15}
const teen13 = {val: 13}
const teen18 = {val: 18}

ten.left = five
five.left = three
three.left = one

five.right = seven
seven.left = six

ten.right = teen15
teen15.left = teen13
teen18.right = teen18

console.log(a, 'tree 1')
console.log(a.val)

console.log(ten, 'tree 2')
console.log(ten.val)

/*
//const rangeSumBST = (root, L, R, sum = 0) => {
// Depth First Search
  dfs(root)
  return sum

function dfs(root) {
  if (!root) return 
  if (root.val >= L && root.val <= R) {
    sum += root.val // root
  }
  if (root.val == L) {
    dfs(root.right)
  } else if (root.val == R) {
    dfs(root.left)
  } else {
    dfs(root.left)
    dfs(root.right)
  }
  }
}
*/

const rangeSumBST = (root, L, R, sum = 0) => {
  // Breath First Search
  let queue = []
  let current = null

  queue.push(root)

  while(queue.length) {
    current = queue.shift()

    if (current.val >= L && current.val <= R) {
      sum += current.val
    }

    if (current.left) {queue.push(current.left)}
    if (current.right) {queue.push(current.right)}
  }
  return sum
}

console.log(rangeSumBST(a, 7, 15), 32)
console.log(rangeSumBST(ten, 6, 10), 23)
