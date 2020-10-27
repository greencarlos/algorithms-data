// DFS, Depth first Search [Recursion]
function getNumberOfIslandsDFS(matrix) {
  let islands = 0;
  const col = matrix.length;
  const row = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        islands += 1;
        sinkIsland(i, j);
      }
    }
  }

  function sinkIsland(r, c) {
    if (r < 0 || c < 0 || r >= row || c >= col) return;
    if (matrix[r][c] === 0) return;
    matrix[r][c] = 0;

    sinkIsland(r + 1, c);
    sinkIsland(r - 1, c);
    sinkIsland(r, c + 1);
    sinkIsland(r, c - 1);
  }

  return islands;
}

// BFS, Breath first search [Iteration]
function getNumberOfIslandsBFS(matrix) {
  let islands = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        islands += 1;
        sinkIsland(i, j);
      }
    }
  }

  function sinkIsland(i, j) {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const queue = [[i, j]];

    while (queue.length !== 0) {
      const [r, c] = queue.shift();

      for (let [row, col] of dirs) {
        matrix[r][c] = 0;

        if (matrix[r + row] && matrix[r + row][c + col] === 1) {
          queue.push([r + row, c + col]);
        }
      }
    }
  }

  return islands;
}

const matrix1 = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
];

const matrix2 = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
];

console.log(getNumberOfIslandsDFS(matrix1), 6);
console.log(getNumberOfIslandsBFS(matrix2), 6);
