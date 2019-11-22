// iteration
const fib = function(n) {
  if (n < 2) return [1]
  const seq = [1, 1]

  for (let i = 2; i < n; i++) {
    let first = seq[seq.length - 1]
    let second = seq[seq.length - 2]
    let sum = first + second
    seq.push(sum)
  }
  return seq
}

// recursion
const recFib = function(n) {
  if (n === 1 || n === 2) return 1
  return recFib(n - 2) + recFib(n - 1)
}

console.log(fib(1))
console.log(fib(5))
console.log(fib(10))
console.log(" ")
console.log(recFib(1))
console.log(recFib(5))
console.log(recFib(10))
