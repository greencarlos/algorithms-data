function Euclid(a,b) {
  if (b === 0) return a
  return Euclid(b, a % b)
}

console.log(Euclid(30,21), 3)
