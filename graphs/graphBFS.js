const one = {val:1, adj: []};
const two = {val:2, adj:[]};
const three = {val:3, adj:[]};
const four = {val:4, adj:[]};
const five = {val:5, adj:[]};
const six = {val:6, adj:[]};

one.adj.push(two)
one.adj.push(four)

two.adj.push(five)

three.adj.push(five)
three.adj.push(six)

four.adj.push(two)

five.adj.push(four)

six.adj.push(six)

const graphBFS = (root) => {
  let result = []
  let queue = []
  let currentNode = null

  queue.push(root)
  while(queue.length) {
    currentNode = queue.shift()

    currentNode.adj.forEach((node) => {
      console.log(node.val)
      if (!node.visited) {
        queue.push(node)
        node.visited = true
      }
    })
    result.push(current.val)
  }
  return result
}

console.log(graphBFS(one))
