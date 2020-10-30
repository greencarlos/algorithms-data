// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

function getCheapestCost(rootNode) {
  const queue = [[rootNode, rootNode.cost]] // [node, sum]
  const pathSum = []
  const visited = new Set()

  while(queue.length !== 0) {
    const [node, sum] = queue.shift()

    if (visited.has(node)) {continue }
    visited.add(node)

    for (let child of node.children) {

      if (child.children.length == 0) {
        pathSum.push(child.cost + sum)
      } 

      queue.push([child, child.cost + sum])
    }
  }

  return Math.max(...pathSum)
}

const zeroRoot = new Node(0)

const five = new Node(5)
const three = new Node(3)
const six = new Node(6)

const four = new Node(4)
const two = new Node(2)
const zero = new Node(0)

const one = new Node(1)
const five2 = new Node(5)
const one2 = new Node(1)

const ten = new Node(10) 
const one3 = new Node(1)
/*
          0
        / | \
       5  3   6
      /  / \  / \
    4   2   0 1  5
       /   /
      1   10
       \
        1
*/
zeroRoot.children.push(five, three, six)
six.children.push(one, five2)
five.children.push(four)

three.children.push(two, zero)
zero.children.push(ten)
two.children.push(one2)

one2.children.push(one3)

console.log(getCheapestCost(zeroRoot))
