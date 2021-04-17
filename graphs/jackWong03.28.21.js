/*
******************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. 
Your feedback will help in promoting ** the group :) 
Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************

* Graph traversals introduction: 
https://docs.google.com/document/d/1sAVhtLIwt9wZaeiro20DJBhxSfCSH0m0bZ5ePveYMwk/edit?usp=sharing

******************
* Introductions
*******************
Graph characteristic:
Nodes (vertices) and connections (edges)
Shortest and longest paths
Node class - children / adjacent list, value
Directed vs undirected graph
Directed: 1-way street
A -> B -> C -> D -> E
Undirected: 2-ways street
A <-> B <-> C <-> D <-> E
Cyclic and acyclic
Connected and Disconnected Graphs
Connected - all the nodes can be reached from one node
Disconnected - not all the nodes can be reached from one node
*/

// Example node:
// adjacency list
function GraphNode(key) {
  this.key = key;
  this.adjacent = []; // references to other vertices (graphNodex)
}

/* matrix
An adjacency matrix is an NxN boolean matrix (where N is the number of nodes), where a true boolean value, or 1, at
matrix [i][j] indicates an edge from node i to node j .

let graph = [[0,1,0,0], [0,0,1,0], [...], [...]]

Graph Traversals:
Depth First Search
Breadth First Search


Tree:
Tree is a type of graph
BFS - queue, and is iterated in while loop
DFS - Recursion, sub-traversal types could pre, post, or in-order traversal. 
Graph Traversal:
BFS - queue, and is iterated in while loop
DFS - Recursion, sub-traversal types could pre, post, or in-order traversal.
Checks have visited node to stop traversal

******************
* Questions
*******************
1) Given a directed graph node (vertex), return all the nodes' (vertices) 
key in an array by performing a breadth first search (BFS) traversal. 

Assume that all nodes are reachable from the input node and the nodes' key is unique.

BFS traversal for a graph is similar to BFS traversal in a tree. 

A major difference is a graph may contain cycles, i.e a node pointing to 
a visited node. To avoid traversing in these cycles, a boolean visited array or object is often used.

Consider a node type for a directed graph in which there are two fields: 
an integer key, and a list of references to other vertices:
*/

function GraphNode(key) {
  this.key = key;
  this.adjacent = []; // references to other vertices
}

const graphBFS = root => {
  const visited = new Set();
  const queue = [root];
  const result = [];

  while (queue.length !== 0) {
    const current = queue.shift();
    visited.add(current.key);
    result.push(current.key)

    for (node of current.adjacent) {
      if (!visited.has(node.key)) {
        queue.push(node);
      }
    }
  }

  return result;
};

// test code
function GraphNode(key) {
  this.key = key;
  this.adjacent = [];
}

var graphNode1 = new GraphNode(1);
var graphNode2 = new GraphNode(2);
var graphNode3 = new GraphNode(3);
var graphNode4 = new GraphNode(4);
var graphNode5 = new GraphNode(5);

graphNode1.adjacent.push(graphNode2);
graphNode1.adjacent.push(graphNode3);
graphNode3.adjacent.push(graphNode4);
graphNode4.adjacent.push(graphNode5);
graphNode5.adjacent.push(graphNode2);

let result = graphBFS(graphNode1); // [1,2,3,4,5]
console.log(result, [1, 2, 3, 4, 5]);

/*
**************
* Solution (copy and paste your solution here with your name on it)
**************

---------- AMBREEN ------------------

from __future__ import annotations
 
from dataclasses import dataclass, field
from collections import deque
 
 
# Node is a graph vertex with key and adjaceny list to represent
# connected vertices
@dataclass
class Node:
 
   key: int
   adjacent: list[Node] = field(default_factory=list)

 
 
def graphBFS(node: Node):
   '''BFS search starting from the vertex `node`'''
 
   visited: set[int] = set()
   q: deque[list[Node]] = deque([node])
   result = []
 
   while q:
       current = q.popleft()
       result.append(current.key)
       visited.add(current.key)
       for neighbor in current.adjacent:
           if neighbor.key not in visited:
               q.append(neighbor)
 
   return result
 
 
graphNode1 = Node(1)
graphNode2 = Node(2)
graphNode3 = Node(3)
graphNode4 = Node(4)
graphNode5 = Node(5)
 
graphNode1.adjacent.append(graphNode2)
graphNode1.adjacent.append(graphNode3)
graphNode3.adjacent.append(graphNode4)
graphNode4.adjacent.append(graphNode5)
graphNode5.adjacent.append(graphNode2)
 
result = graphBFS(graphNode1)
print(result)
*/
