// isPrime
const isPrime = (n, i = 2) => {
  if (n < 2) return false
  if (n === i) return true
  if (n % i === 0) return false
  return isPrime(n, i + 1)
}

console.log("---isPrime---")
console.log(isPrime(7), true)
console.log(isPrime(10), false)
console.log(isPrime(1), false)
console.log(isPrime(2), true)
console.log(isPrime(3), true)
console.log(" ")
