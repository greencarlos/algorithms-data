// Euclid's GCD
const Euclid = (a, b) => {
  if (b === 0) return a
  return Euclid(b, a % b)
}

console.log("---Euclid---")
console.log(Euclid(10, 15), 5)
console.log(Euclid(50, 100), 50)
console.log(Euclid(30, 21), 3)
