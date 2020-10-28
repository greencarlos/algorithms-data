/*
Recursion and Dynamic Programming (4 steps)
1. Start with the recursive backtracking solution
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity
 
*/

function numOfPaths(n, i=0, j=0) {
  console.log(i, 'i', j, 'j')
  if (i === n - 1 && j === n - 1) return 1
  if (i > n || j > n) return 0
  if (i > j) return 0
  return numOfPaths(n, i+1, j) + numOfPaths(n, i, j+1)
}

console.log(numOfPaths(4), 5)

