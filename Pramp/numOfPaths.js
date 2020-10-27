/*
Recursion and Dynamic Programming (4 steps)
1. Start with the recursive backtracking solution
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity

You’re testing a new driverless car that is 
located at the Southwest (bottom-left) corner of an n×n grid. 

The car is supposed to get to the opposite, Northeast (top-right), 
corner of the grid. 

Given n, the size of the grid’s axes, 
write a function numOfPathsToDest that returns 
the number of the possible paths the driverless car can take.

For convenience, let’s represent every square in the grid as a pair (i,j). 
The first coordinate in the pair denotes the east-to-west axis, 
and the second coordinate denotes the south-to-north axis. 

The initial state of the car is (0,0), and the destination is (n-1,n-1).
The car must abide by the following two rules: it cannot cross the diagonal border. 
In other words, in every step the position (i,j) needs to maintain i >= j. 

See the illustration above for n = 5. In every step, 
it may go one square North (up), or one square East (right), 
but not both. E.g. if the car is at (3,1), it may go to (3,2) or (4,1).

Explain the correctness of your function, and analyze its time and space complexities. 
*/

// Brute Force
// Time & Space O(!n)
const numOfPaths = (n, i = 0, j = 0) => {
  if (i === n - 1 && j === n - 1) return 1;
  if (i < 0 || j < 0 || j > n || i > n) return 0;
  if (i > j) return 0;
  return numOfPaths(n, i + 1, j) + numOfPaths(n, i, j + 1);
};

// Dynamic Programming
// Time & Space O(n^2)
const numOfPathsToDest = n => {
  const memo = Array(n)
    .fill(1)
    .map(x => Array(n).fill(-1));
  return numOfPathsToSquare(n, n - 1, n - 1, memo);
};

const numOfPathsToSquare = (n, i, j, memo) => {

  if (i < 0 || j < 0) {
    return 0;
  } else if (i < j) {
    memo[i][j] = 0;
  } else if (memo[i][j] !== -1) {
    return memo[i][j];
  } else if (i === 0 && j === 0) {
    memo[i][j] = 1;
  } else {
    memo[i][j] =
      numOfPathsToSquare(n, i, j - 1, memo) + numOfPathsToSquare(n, i - 1, j, memo);
  }

  return memo[i][j];
};

// Iterative
// Time O(n^2) & Space O(n)
const numOfPathsIterative = n => {
  if (n === 1) return 1
  
  let lastRow = Array(n).fill(1)
  let currentRow = Array(n).fill(1)
    
    for (let j = 1; j < n; j++) {
      for (let i = j; i < n; i++) {
      if (i === j) {
        currentRow[i] = lastRow[i]
      } else {
        currentRow[i] = currentRow[i - 1] + lastRow[i]
      }
      lastRow = currentRow
      }
    }

  return currentRow[n-1]
};


console.log(numOfPaths(4), 5, 'paths');
console.log(numOfPathsToDest(4), 5, 'dest');
console.log(numOfPathsIterative(4), 5, 'iterative');
