/* 

Graph Algorithms for Technical Interviews
https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=2016s&ab_channel=freeCodeCamp.org

Representing Graph Data Structures
https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs

Edge: -- <--> 
Vertex: -5 
Graph:   9         -5 
          \        / \
           4 --- 10 - 90
          /
         7 -- 0
          \
          -2

                           
https://en.wikipedia.org/wiki/Edge_list

Edge List = [ // Space O(E) & Search O(lg E) & Length O(V)
   ["a", "b"],
   ["a", "c"],
   ["b", "d"],
   ["c", "e"],
   ["c", "e"],
   ["d", "f"],
]

https://en.wikipedia.org/wiki/Adjacency_matrix

Adjacency Matrices = [ // Space & Search O(V^2)
  [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] 
] 

https://en.wikipedia.org/wiki/Adjacency_list

Adjacency lists save space for the graphs that are not really densely connected. 
For a completely connected graph the number of edges E is O(V^2) itself, Space is O(V+E)
If the number of edges is much smaller than V^2, then Space is O(V+E)

Adjacency Lists = [
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
] 

*/

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log("Adjacency List Graph code:", graph);
console.log("-----");

const depthFirstStack = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log("depth first stack", current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

console.log("Depth first search with array stack and source: a");
depthFirstStack(graph, "a");
console.log("-----");

const depthFirstRecursion = (graph, source) => {
  console.log("depth first recursion", source);

  for (let neighbor of graph[source]) {
    depthFirstRecursion(graph, neighbor);
  }
};

console.log("Depth first search with recursion stack and source: a");
depthFirstRecursion(graph, "a");
console.log("-----");

const breathFirstSearch = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();

    console.log("breath first search", current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

console.log("Breath first search with queue and source: a");
breathFirstSearch(graph, "a");
console.log("-----");

const hasPathRecursion = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathRecursion(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};

console.log("Has path recursion, source: a, destination: b");
console.log(hasPathRecursion(graph, "a", "b"), true);
console.log("-----");

const hasPathQueue = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

console.log("Has path queue, source: a, destination: b");
console.log(hasPathQueue(graph, "a", "b"), true);
console.log("-----");

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// Matrix to Adjacency list
function matrixToAdj(grid) {
  const graph = {}
  const row = grid.length
  const col = grid[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!graph[i]) {
        graph[i] = []
      } 

      if (grid[i][j] === 1) {
        graph[i].push(j)
      }
    }
  }

  return graph
}


// Edge list to Adjacency list
const edgeToAdj = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const undirectedPathRecursion = (edges, nodeA, nodeB) => {
  const graph = edgeToAdj(edges);
  const visited = new Set();

  const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst) === true) {
        return true;
      }
    }

    return false;
  };

  return hasPath(graph, nodeA, nodeB);
};

console.log("Undirected path recursion, source: j, destination: i");
console.log(undirectedPathRecursion(edges, "j", "i"), true);
console.log("-----");

const undirectedPathQueue = (edges, nodeA, nodeB) => {
  const graph = edgeToAdj(edges);
  const visited = new Set();
  const queue = [nodeA];

  while (queue.length !== 0) {
    const node = queue.shift();
    visited.add(node);

    if (visited.has(node)) return true;
    if (nodeB === node) return false;

    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log("Undirected path queue, source: j, destination: i");
console.log(undirectedPathQueue(edges, "j", "i"), true);
console.log("-----");

const graph2 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

console.log("graph 2", graph2);
console.log("-----");

const connectComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  const explore = (current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (let neighbor of graph[current]) {
      explore(neighbor, visited);
    }
    return true;
  };

  for (let node in graph) {
    if (explore(node, visited) === true) {
      count += 1;
    }
  }

  return count;
};

console.log("Connected component count graph2");
console.log(connectComponentsCount(graph2), 2);
console.log("-----");

const graph3 = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

console.log("graph 3", graph3);
console.log("-----");

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;

  const exploreSize = (n) => {
    if (visited.has(n)) return 0;
    let size = 1;

    visited.add(n);

    for (let neighbor of graph[n]) {
      size += exploreSize(neighbor);
    }

    return size;
  };

  for (let node in graph) {
    const size = exploreSize(node);
    if (size > longest) longest = size;
  }

  return longest;
};

console.log("Connected component path graph3");
console.log(largestComponent(graph3), 4);
console.log("-----");

const edges1 = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log("edges1", edges1);
console.log("-----");

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = edgeToAdj(edges);
  const queue = [[nodeA, 0]];
  const visited = new Set([nodeA]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

console.log(`Shortest path edges1, nodeA: 'w', nodeB: 'z'`);
console.log(shortestPath(edges1, "w", "z"), 2);
console.log("-----");

const matrix1 = [
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0],
];

console.log(`Matrix 1`, matrix1);
console.log("-----");

const countIslandsRecursion = (grid) => {
  let count = 0;
  const row = grid.length;
  const col = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        count++;
        dfs(i, j);
      }
    }
  }

  function dfs(r, c) {
    if (r < 0 || c < 0 || c >= col || r >= row) return;
    if (grid[r][c] === 0) return;
    grid[r][c] = 0;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  return count;
};

console.log(`Count Islands Recursion matrix 1`);
console.log(countIslandsRecursion(matrix1), 4);
console.log("-----");

const matrix2 = [
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0],
];

console.log(`Matrix 2`, matrix2);
console.log("-----");

const countIslandsQueue = (grid) => {
  let count = 0;
  const queue = [];

  const row = grid.length;
  const col = grid[0].length;

  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        bfs(i, j);
      }
    }
  }

  function bfs(i, j) {
    queue.push([i, j]);

    while (queue.length !== 0) {
      const [r, c] = queue.shift();
      if (r < 0 || c < 0 || c >= col || r >= row) continue;

      if (grid[r][c] === 0) continue;
      grid[r][c] = 0;

      for (let [x, y] of dirs) {
        if (grid[r + x] && grid[r + x][c + y] === 1) {
          queue.push([r + x, c + y]);
        }
      }
    }
  }

  return count;
};

console.log(`Count Islands Queue matrix 2`);
console.log(countIslandsQueue(matrix2), 4);
console.log("-----");

const matrix3 = [
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0],
];

console.log(`Matrix 3`, matrix3);
console.log("-----");

const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;

  const exploreSize = (r, c) => {
    const rowBounds = 0 < r && r < grid.length;
    const colBounds = 0 < c && c < grid[0].length;
    const pos = r + "," + c;
    let size = 1;

    if (!rowBounds || !colBounds) return 0;
    if (grid[r][c] === 0) return 0;
    if (visited.has(pos)) return 0;

    visited.add(pos);

    size += exploreSize(r - 1, c);
    size += exploreSize(r + 1, c);
    size += exploreSize(r, c - 1);
    size += exploreSize(r, c + 1);

    return size;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = exploreSize(row, col);

      if (size > 0 && size < min) {
        min = size
      }
    }
  }

  return min;
};

console.log(`Minimum Island matrix 3`);
console.log(minimumIsland(matrix3), 2);
console.log("-----");
