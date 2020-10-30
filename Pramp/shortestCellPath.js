function shortestCellPath(grid, sr, sc, tr, tc) {
  const queue = [[sr, sc, 0]] // 0, 0, 1
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  
  while(queue.length !== 0) {
    const [row, col, path] = queue.shift() // 0, 2, 3, queue = []
    
    if (row === tr && col === tc) {
      return path
    }
    
    grid[row][col] = 0 // grid[0][0] = 0
    
    for (let [r, c] of dirs) {
      if (grid[row + r] && grid[row + r][col + c] === 1) {
        queue.push([row + r, col + c, path + 1])
      }
      // [[0, 2, 3]]
    } 
  }
  
  return -1
}

// [[1, 1]]

/*
  [
    [1, 1, 1]
    [0, 0, 0]
    [1, 0, 1]
  ]
*/

const grid1 = [
  [1, 1, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1]
]
console.log(shortestCellPath(grid1, 0, 0, 2, 0), 8)
console.log(shortestCellPath(grid1, 0, 0, 0, 0), 0)
console.log(shortestCellPath(grid1, 0, 0, 0, 1), 1)

const grid2 = [
  [1, 1, 1, 1],  //0
  [0, 0, 0, 1],  //1
  [1, 0, 1, 1]   //2
// 0, 1, 2, 3
]
console.log(shortestCellPath(grid2, 0, 0, 2, 0), -1)
//sr = 0, sc = 0, tr = 2, tc = 0


/*

Shortest Path traversal
BFS / Breath First traversal

Time O(n * m) for row and column
Space O(n * m) path

path = 0

start at our start row & col, add to queue
We can look up, down, left and right
whenver we see a 1 we can add it to our queue

make sure we're not out of bounds
overwrite previously visited / current cell (avoid infinite cycle)
increment our path variable

keep traversing for the rest of the 1's
check if our current row & col matches our 
target row and col then we can return path

otherwise, if we iterate over the entire
matrix and we never hit our target (row & col)
then return -1


input:
grid = [

 v start
[1, 1, 1, 1], 
[0, 0, 0, 1], 
[1, 1, 1, 1]
 ^ end
]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8


grid = [
 v start
[1, 1, 1, 1], 
[0, 0, 0, 1], 
[1, 0, 1, 1]
 ^ end
]

sr = 0, sc = 0, tr = 2, tc = 0
output: -1

*/
