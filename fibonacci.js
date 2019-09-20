function fibonacci(n) {
  const seq = [0, 1]

  for (let i = 1; i < n; i++) {
    const first = seq[seq.length - 1]
    const second = seq[seq.length - 2]
    seq.push(first + second)
  }
  return seq 
}

const recFib = (n) => {
  if (n < 2) return n
  return recFib(n - 2) + recFib(n - 1)
}


console.log(recFib(2), 2)
console.log(recFib(5), 5)
console.log(recFib(6), 6)
console.log(recFib(8), 8)
console.log(recFib(10), 10)

console.log(fibonacci(2), 2)
console.log(fibonacci(5), 5)
console.log(fibonacci(6), 6)
console.log(fibonacci(8), 8)
console.log(fibonacci(10), 10)
