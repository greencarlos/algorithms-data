/*
Recursion and Dynamic Programming (4 steps)

1. Start with the recursive backtracking solution
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
*/


// Brute Force Recursion
// Time & Space O(n!)
const fibo = n => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(2), 1)
console.log(fibo(3), 2)
console.log(fibo(5), 5)
console.log(fibo(9), 34)
console.log(fibo(10), 55)
console.log('--brute force recursion--')

// Top Down Memoization
// Time & Space O(n) 
const fiboRec = (n, i=2, memo = [0, 1]) => {
  memo[i] = memo[i - 1] + memo[i - 2]
  if (i === n) return memo[n]
  return fiboRec(n, i+1, memo) 
}

console.log(fiboRec(2), 1)
console.log(fiboRec(3), 2)
console.log(fiboRec(5), 5)
console.log(fiboRec(9), 34)
console.log(fiboRec(10), 55)
console.log('--recursive memoization--')

// Bottom Up Memoization
// Time & Space O(n) 
const fiboIte = (n, memo=[0,1]) => {
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }

  return memo[n]
}

console.log(fiboIte(2), 1)
console.log(fiboIte(3), 2)
console.log(fiboIte(5), 5)
console.log(fiboIte(9), 34)
console.log(fiboIte(10), 55)
console.log('--bottom up memoization--')

// Removed Memoization 
// Time O(n) & Space O(1)
const fibonacci = (n) => {
  if (n <= 0) return 0
  let a = 0
  let b = 1
  for (let i = 2; i < n; i++) {
    let c = a + b
    a = b
    b = c
  }

  return a + b
}

console.log(fibonacci(2), 1)
console.log(fibonacci(3), 2)
console.log(fibonacci(5), 5)
console.log(fibonacci(9), 34)
console.log(fibonacci(10), 55)
console.log('--constant space--')
