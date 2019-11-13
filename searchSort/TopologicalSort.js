// https://gist.github.com/shinout/1232505
// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/topological-sorting/topologicalSort.js


// Utulizes a stack and Depth First Search

// LinkedList Node
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}


// LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  prepend (value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  append(value) {
    const newNode = new LinkedListNode(value, this.head)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode
    this.tail = newNode
    return this
  }

  deleteHead(){
    if (!this.head) {
      return null
    }

    const deleteHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }
    return deleteHead
  }
}

// Stack Data Structure
class Stack {
  constructor() {
  this.linkedList = new LinkedList()
  }
  
  isEmpty() {
    return !this.linkedList.head
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.linkedList.head.value
  }

  push(value) {
    this.linkedList.prepend(value)
  }

  pop() {
    const removedHead = this.linkedList.deleteHead()
    return removeHead ? removed.value : null
  }

  toArray() {
    return this.linkedList
    .toArray()
    .map(linkedListNode => linkedListNode.value)
  }
}

// Graph Depth First Search
function depthFirstSearchRecursive(graph, currentVertex, previousVertex, callbacks) {
  callbacks.enterVertex({ currentVertex, previousVertex })

  graph.getNeighbors(currentVertex).forEach((nextVertex) => {
    if (callbacks.allowTraversal({ previousVertex, currentVertex, nextVertex})) {
      depthFirstSearchRecursive(graph, nextVertex, currentVertex, callbacks)
    }
  })

  callbacks.leaveVertex({ currentVertex, previousVertex })
}

// Topological Sort
function topologicalSort (graph) {
  const unvisitedSet = {}
  graph.getAllVertices.forEach((vertex) => {
    unvisitedSet[vertex.getKey()] = vertex
  });

  const visitedSet = {};

  const sortedStack = new Stack();

  const dfsCallbacks = {
    enterVertex: ({ currentVertex }) => {
      
      visitedSet[currentVertex.getKey()] = currentVertex
      delete unvisitedSet[currentVertex.getKey()]
    },
    leaveVertex: ({ currentVertex }) => {
      sortedStack.push(currentVertex)
    },
    allowTraversal: ({ nextVertex }) => {
      return !visitedSet[nextVertex.getKey()]
    },
  };

  while(Object.keys(unvisitedSet).length) {
    const currentVertexKey = Object.keys(unvisitedSet)[0]
    const currentVertex = unvisitedSet[currentVertexKey]

    depthFirstSearch(graph, currentVertex, dfsCallbacks)
  }
  return sortedStack.toArray()
}

const sampleGraph = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20]
  [5, 10, 15, 20, 25]
]

console.log(topologicalSort(sampleGraph))
