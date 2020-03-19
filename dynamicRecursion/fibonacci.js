// O(n^2)
const fib = (n) => {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

function fibon(n) {
  if (n < 2) {
    return n
  }

  return fibon(n-1) + fibon(n-2)
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

function finona(n, cache) {
  if (cache[n] !== undefined) {
    return cache[n]
  }

  if (n < 2) {
    cache[n] = n
  } else {
    cache[n] fibona(n - 1, cache) + fibona(n - 2, cache)
  }
}

console.log(fib(1), 1)
console.log(fib(5), 5)
console.log(fib(10), 10)
console.log(" ")
console.log(fibo(1), 1)
console.log(fibo(5), 5)
console.log(fibo(10), 10)
console.log(" ")
console.log(fibon(1), 1)
console.log(fibon(5), 5)
console.log(fibon(10), 10)
