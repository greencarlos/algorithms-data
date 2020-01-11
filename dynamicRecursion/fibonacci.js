// O(n^2)
const fib = (n) => {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

// O(n)
const fibo = (n, f = []) => {
  f[0] = 0
  f[1] = 1

  for (i = 2; i <= n; i++) {
    f[i] = f[i-1] + f[i -2]
  }
  return f[n]
}

console.log(fib(1), 1)
console.log(fib(5), 5)
console.log(fib(10), 10)
console.log(" ")
console.log(fibo(1), 1)
console.log(fibo(5), 5)
console.log(fibo(10), 10)
