/*
https://leetcode.com/problems/climbing-stairs/ 

 Recursion and Dynamic Programming (4 steps)
1. Start with the recursive backtracking solution
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity
*/

/*
// Time & Space O(n!)
var climbStairs = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2
  return climbStairs(n - 1) + climbStairs(n - 2) 
}
*/

// Time & Space O(n) Top Down
/*
var climbStairs = function(n, i=3, memo = [0, 1, 2]) {
  if (n < i) return memo[n]
  memo[i] = memo[i - 1] + memo[i - 2]
 return climbStairs(n, i+1, memo)
}
*/

/*
// Time & Space O(n) Bottom Up
var climbStairs = function(n) {
  const memo = Array(n + 1).fill(1)

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
};
*/

var climbStairs = function(n) {
  if (n <= 0) return 0
  let a = 0
  let b = 1

  for (let i = 2; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return a + b
}

console.log(climbStairs(2), 2)
console.log(climbStairs(3), 3)
