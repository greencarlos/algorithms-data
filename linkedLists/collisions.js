// LinkedList Constructor
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const elements = [1, 2, 3, 2, 1, 1, 1];

// {1: 4, 2: 2, 3 : 1} Frequency
const hashTable = elements.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})

const traverse = (node, curr) => {
  if (!node) return
  if (node.next === null) {
    node.next = new ListNode(curr) 
    return
  }

  traverse(node.next)
}

// collisions at 1
const hashCollision = elements.reduce((acc, curr) => {
  if (acc[curr]) {
    traverse(acc[curr], curr)
  } else {
    acc[curr] = new ListNode(curr)
  }

  return acc
}, {})


console.log(hashTable, 'Frequency')
console.log(hashCollision, 'Collide')
