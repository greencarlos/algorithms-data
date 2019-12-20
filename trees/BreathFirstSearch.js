const arr = [1, 2, 3, 4, 5]

console.log(arr, "arr")
console.log(arr.shift(), "shift")
console.log(arr.shift(), "shift")
console.log(arr.shift(), "shift")
console.log(arr.shift(), "shift")
console.log(arr, "arr")
console.log(" ")

// BftOne
/*
       1
      / \
     2   3
    / \ / \
   4  5 6  7
  / \ /
 8  9 10     */
var tree = [
    {value: 1, left: 2, right: 3},
    {value: 2, left: 4, right: 5},
    {value: 3, left: 6, right: 7},
    {value: 4, left: 8, right: 9},
    {value: 5, left: 10, right: null},
    {value: 6, left: null, right: null},
    {value: 7, left: null, right: null},
    {value: 8, left: null, right: null},
    {value: 9, left: null, right: null},
    {value: 10, left: null, right: null}
]

// BFT two
const a = {val:1}
const b = {val:2}
const c = {val:3}
const d = {val:4}
const e = {val:5}
const f = {val:6}
const g = {val:7}
/*
    a
   / \
  b   c
 / \ / \ 
d  e f  g  */ 

a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g

// BFT Three
function Node(value){
  this.data = value;
  this.left = null;
  this.right = null;
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

/*
    1
   / \
  2   3
 / \ / \
4  5 6  7  */ 

let rootNode = node1

node1.left = node2
node1.right = node3

node2.left = node4
node2.right = node5

node3.left = node6
node3.right = node7


// Breath First One
const BftOne = (tree) => {
  const queue = []

  queue.push(tree[0])

  while(queue.length !== 0) {
  for (let i = 0; i < queue.length; i++) {

  let node = queue.shift()
  console.log(node.value, 'bft1')

  if (node.left) {queue.push(tree[node.left])}
  if (node.right) {queue.push(tree[node.right])}
    }
  }
  return null 
}

// Breath First Two
const BftTwo = (node, queue = []) => {
  if (!node) return
  queue.push(node)
  console.log(node.val, "bft2")
  queue = queue.concat(node.left || node.right) 
  return BftTwo(queue.shift(), queue)
}

// Breath First Three
const BftThree = (node) => {
  let queue = [],
  currentNode = null;

  queue.push(node)
  
  while(queue.length){
  currentNode = queue.shift()

  console.log(currentNode.data, 'bft3')

  if (currentNode.left) {queue.push(currentNode.left)}
  if (currentNode.right) {queue.push(currentNode.right)}
    }
}

console.log(" ")
console.log(BftOne(tree))
console.log(BftTwo(a))
console.log(BftThree(rootNode))
