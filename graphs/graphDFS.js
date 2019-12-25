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

const graphDFS = (node) => {
  if (node === null) return
  
  for (let i = 0, l = node.adj.length; i < l; i++) {
    let nextNode = node.adj[i]

    if (!nextNode.visited) {
      nextNode.visited = true
      graphDFS(nextNode)
    }
  }
}

console.log(graphDFS(one))
