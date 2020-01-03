// https://leetcode.com/problems/invert-binary-tree/

/* Invert a binary tree.
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1

Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew),
but you can’t invert a binary tree on a whiteboard so f*** off.
*/

const four = {val:4}
const two = {val:2}
const seven = {val:7}
const one = {val:1}
const three = {val:3}
const six = {val:6}
const nine = {val:9}

four.left = two
four.right = seven

two.left = one
two.right = three

seven.left = six
seven.right = nine

console.log(four, 'root')

// Traversal
/* var invertTree = function(root) {
  let current = null
  let queue = [] 

  queue.push(root)

  while(queue.length) {
    current = queue.shift()
    console.log(current.val)
    if (current.left) {queue.push(current.right)}
    if (current.right) {queue.push(current.left)}
  }
  return root
}; */

var invertTree = function(root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  }
  return root
}

console.log(" ")
console.log(invertTree(four))
