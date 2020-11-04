/*
Recursion and Dynamic Programming (4 steps)
1. Start with the recursive backtracking solution
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity
*/

// Recursive Backtracking / Brute Force
// Time & Space O(n!)
function numOfPaths(n, i=0, j=0) {
  if (i === n - 1 && j === n - 1) return 1
  if (i > n || j > n) return 0
  if (i > j) return 0
  return numOfPaths(n, i+1, j) + numOfPaths(n, i, j+1)
}

// Memoization Table top-down
// Recursive Time & Space O(n)
function numOfPathsToDest(n) {
  const memo = Array(n + 1).fill([]).map(x => Array(n + 1).fill(-1))
  return calcPaths(n - 1, n - 1, memo)
}

function calcPaths(i, j, memo) {
  if (i < 0 || j < 0) return 0
  if (i < j) {
    memo[i][j] = 0
  } else if (memo[i][j] !== -1) {
    return memo[i][j]
  } else if (i === 0 && j === 0) {
    memo[i][j] = 1
  } else {
    memo[i][j] = calcPaths(i, j - 1, memo) + calcPaths(i - 1, j, memo)
  }
  
  return memo[i][j]
}


// Memoization Table bottom-up
// Iterateive Time & Space O(n)
function numOfPathsToDest(n) {
  if (n === 1) return 1
  
  let lastRow = []
  for (let i = 0; i < n - 1; i++) {
    lastRow[i] = 1
  }
  const currentRow = Array(n - 1).fill(0)
  
  for (let j = 0; j < n - 1; j++) {
    for (let i = j; i < n - 1; i++) {
      if (i === j) {
        currentRow[i] = lastRow[i]
      } else {
        currentRow[i] = currentRow[i - 1] + lastRow[i]
      }
    }
    lastRow = currentRow
  }
       
  return currentRow[currentRow.length - 1]
}

console.log(numOfPaths(4), 5)

