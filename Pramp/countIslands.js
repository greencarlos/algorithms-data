const matrix = [
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 1, 1, 0],
];

const countIslands = (grid) => {
  let count = 0
  const row = grid.length
  const col = grid[0].length

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        count++
        dfs(i,j)
      }
    }
  }

  function dfs(r,c){
    if (r < 0 || c < 0 || c >= col || r >= row) return
    if (grid[r][c] === 0) return
    grid[r][c] = 0

    dfs(r+1,c)
    dfs(r-1,c)
    dfs(r,c+1)
    dfs(r,c-1)
  }

  return count
}

const countIslands = grid => {
  let count = 0;
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
    const queue = [[i, j]];

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
  return count
};

console.log(countIslands(matrix), 4);
