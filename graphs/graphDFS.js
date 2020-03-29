let DfsSearch = function(graph, startNode) {
  let stack = []
  stack.push(startNode)

  while(stack.length > 0) {
    let node = stack.pop()
    console.log('visiting node', graph[node].value)

    if (graph[node].isVisited === false) {
      graph[node].isVisited = true
      for (currentNode in graph[node].edges) {
        stack.push(graph[currentNode].value)
      }
    }
  }
}

let makeGraphs = () => {
  let graph = {}

  graph.addVertex = (node) => {
    graph[node] = {edges: {}};
    graph[node].isVisited = false
    graph[node].value = node
  }

  graph.addEdge = (startNode, endNode) => {
    if (graph.contains(startNode) && graph.contains(endNode)) {

      graph[startNode].edges[endNode] = true
      graph[endNode].edges[startNode] = true
    }
  }

  graph.contains = (node) => {
    if (graph[node]) {
      return true
    } else {
      return false
    }
  }

  graph.removeEdge = (startNode, endNode) => {
    if (graph.contains(startNode) && graphs.contains(endNode)) {
      delete graph[startNode].edges[endNode]
      delete graph[endNode].edges[startNode]
    }
  }

  graph.removeVertex = (node) => {
    if (graph.contains(node)) {
      for (connectedNodes in graph[node].edges) {
        graph.removeEdge(node, connectedNodes)
      }
    }
    delete graph[node]
  }
  return graph
}

let dfsGraph = makeGraphs()

dfsGraph.addVertex(1)
dfsGraph.addVertex(2)
dfsGraph.addVertex(3)
dfsGraph.addVertex(4)
dfsGraph.addVertex(5)

dfsGraph.addEdge(1,2)
dfsGraph.addEdge(1,3)
dfsGraph.addEdge(2,4)
dfsGraph.addEdge(2,5)

/*
(3)    (5)
 ^      ^
 |      |
(1) -> (2) -> 4
*/

console.log(DfsSearch(dfsGraph, 1))
