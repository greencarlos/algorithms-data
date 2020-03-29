function Graph() {
  this.nodes = []
}

function GraphNode(value) {
  this.data = value
  this.adjacency = []
}

function BFSGraphs(node) {
  let queue = [];
  let currentNode = null;

  queue.push(node);

  while (queue.length) {
    currentNode = queue.shift();

    // do something
    console.log(currentNode.data);

    currentNode.visited = true;

    // enqueue child nodes
    for (let i = 0, l = currentNode.adjacent.length; i < l; i++) {
      let nextNode = currentNode.adjacent[i];

      // enqueue unvisited node
      if (!nextNode.visited) {
        queue.push(nextNode);
      }
    }
  }
}
