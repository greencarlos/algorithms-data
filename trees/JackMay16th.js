// All four traversals require O(n) time
// they visit every node exactly once
// tree questions are some variation of BFS/DFS

/* CONSTRUCTOR
function Node(val) {
  this.val = val;
  this.left = left;
  this.right = right;
}*/

// create nodes
const a = {val: 1}
const b = {val: 2}
const c = {val: 3}
const d = {val: 4}
const e = {val: 5}
const f = {val: 6}
const g = {val: 7}

// Link nodes
a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g

console.log('root node =', a)

/* Finished Tree
    1
   / \
  2   3
 / \ / \
4  5 6  7 */

// DFS
// Depth First Search/Traversal
// Search nodes furthest from the root

// O(h) space where h = height
// function call stack stores all 
// ancestors of the node

// inorder: left, root, right
// preorder: left, right, root
// postorder: root, left, right

const inorder = node => {
  if (!node) return
  inorder(node.left) // left
  console.log(node.val) // root
  inorder(node.right) // right
}

const preorder = node => {
  if (!node) return
  preorder(node.left)
  preorder(node.right)
  console.log(node.val)
}

const postorder = node => {
  if (!node) return
  console.log(node.val)
  postorder(node.left)
  postorder(node.right)
}

console.log(inorder(a), "inorder")
console.log(preorder(a), "preorder")
console.log(postorder(a), "postorder")

// BFS
// Breath First Search/Traversal
// Search nodes closest to the root

// O(w) space where w = width
// Queue stores nodes of the 
// different levels

// Queue data structure: F.I.F.O.
// First in First Out
// Like a line at the store

//                                      enqueue 
// shift() <-- [1, 2, 3, 4, 5, 6, 7] <-- push()
// dequeue

const BFS = (node, queue = [], current = null) => {
  queue.push(node)

  while(queue.length !== 0) {

  current = queue.shift()
  console.log(current.val)

  if (current.left) {queue.push(current.left)}
  if (current.right) {queue.push(current.right)}
  }
}

console.log(BFS(a), "BFS")
