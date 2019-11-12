// https://www.tutorialspoint.com/Topological-sorting-using-Javascript-DFS 

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
  }
  addNode(v) {
    this.AdjList.set(v, [])
  }
  addDirectedEdge(v, w) {
    this.AdjList.get(v).push(w)
    this.AdjList.get(w).push(v)
  }
}

function topologicalSortHelper(node, explored, s) {
  explored.add(node)

  this.edges[node].forEach(n => {
    if (!explored.has(n)) {
      this.topologicalSortHelper(n, explored, s)
    }
  })
  s.push(node)
}

function topologicalSort() {
  let s = new Stack(this.nodes.length)
  let explored = new Set()

  this.nodes.forEach(node => {
    if (!explored.has(node)) {
      this.topologicalSortHelper(node, explored, s)
    }
  })

  while (!s.isEmpty()) {
    console.log(s.pop())
  }
}


let g = new Graph()
g.addNode("A")
g.addNode("B")
g.addNode("C")
g.addNode("D")
g.addNode("E")
g.addNode("F")
g.addNode("G")

g.addDirectedEdge("A", "C")
g.addDirectedEdge("A", "B")
g.addDirectedEdge("A", "D")
g.addDirectedEdge("C", "D")
g.addDirectedEdge("D", "E")
g.addDirectedEdge("E", "F")
g.addDirectedEdge("B", "G")

console.log('Graph: ', g)
console.log(g.topologicalSort())
