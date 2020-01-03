// https://leetcode.com/problems/rotting-oranges/

/* In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
  Every minute, any fresh orange that is adjacent 4-directionally) to a rotten orange becomes rotten.

  Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.()
*/

/* 
Example 1:
Input: [[2,1,1],1,1,0],0,1,1]]
Output: 4

Example 2:
Input: [[2,1,1],0,1,1],1,0,1]]
Output: -1

Explanation:
The orange in the bottom left corner row 2, column 0) is never rotten, 
because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0

Explanation:  Since there are already no fresh oranges at minute 0, 
the answer is just 0.
*/

/**
 *  * @param number[][]} grid
 *   * @return number}
**/
var orangesRotting = function(grid) {
  const dirs = [[0,-1,],[1,0],[0,1],[-1,0]]
  let count = 0
  while(true) {
    const next = []
    let hasReresh = false
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
        hasReresh |= grid[y][x] === 1
        if (grid[y][x] === 2) {
          for (const [dirX, dirY] of dirs) {
            if (grid[y + dirY] != null && grid[y + dirY][x + dirX] === 1) {
              next.push([x + dirX, y + dirY])
            }
          }
        }
      }
    }

    for (const [x, y] of next) {
      grid[y][x] = 2
    }
    if (next.length === 0) {
      if (hasReresh) {
        return -1
      }
      break
    }
    count++
  }
  return count
};

const input1 = [[0,2]]
const output1 = 0

const input2 = [[2,1,1], [1,1,0], [0,1,1]]
const output2 = 4

const input3 = [[2,1,1], [0,1,1], [1,0,1]]
const output3 = -1

console.log(orangesRotting(input1), output1)
console.log(orangesRotting(input2), output2)
console.log(orangesRotting(input3), output3)
