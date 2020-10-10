/*
Recursion and Dynamic Programming (4 steps)

1. Start with the recursive backtracking solution
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity
*/


// Time & Space O(n!)
const fibo = n => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(5))
console.log(fibo(9))
console.log(fibo(10))
console.log('--recursion--')

// Time & Space O(n) Top Down
const fiboMemo = (n, i=2, memo = [0, 1]) => {
  memo[i] = memo[i - 1] + memo[i - 2]
  if (i === n) return memo[n]
  return fiboMemo(n, i+1, memo) 
}

console.log(fiboMemo(2))
console.log(fiboMemo(3))
console.log(fiboMemo(5))
console.log(fiboMemo(9))
console.log(fiboMemo(10))
console.log('--memoization--')

// Time & Space O(n) Bottom Up
const fiboDP = (n, memo=[0,1]) => {
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
}

console.log(fiboDP(2))
console.log(fiboDP(3))
console.log(fiboDP(5))
console.log(fiboDP(9))
console.log(fiboDP(10))
console.log('--dynamic programming--')
