// https://leetcode.com/problems/unique-paths/

/* A robot is located at the top-left corner of a m x n grid
(marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid
(marked 'Finish' in the diagram below).

How many possible unique paths are there?
Note: m and n will be at most 100.

Input: m = 3, n = 2
Output: 3
Explanation:

From the top-left corner, 
there are a total of 3 ways to reach the bottom-right corner:

1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Input: m = 7, n = 3
Output: 28
    
S => Start
F => Finsh

    |S |  |  |
    -----------
    |  |  |  |
    ------------
    |  |  |  |
    -----------
    |  |  |F |


    |S |  |  |  |  |  |
    -------------------
    |  |  |  |  |  |  |
    -------------------
    |  |  |  |  |  |F |

*/
var uniquePaths = function(m, n) {
  const makeMatrix = (m, n) => Array(m).fill(Array(n).fill(1))
  let matrix = makeMatrix(m, n)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i-1][j]+matrix[i][j-1]
    }
  }
  return matrix[m-1][n-1]
};
//Input: m = 3, n = 2
//Output: 3
console.log(uniquePaths(3, 2), 3)
//Input: m = 7, n = 3
//Output: 28
console.log(uniquePaths(7, 3), 28)
