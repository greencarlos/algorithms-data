function root(x, n) {
  if (x === 0) return 0
  let lowerBound = 0
  let upperBound = Math.max(x, 1)
  let approxRoot = (upperBound + lowerBound) / 2
  
  while((approxRoot - lowerBound) >= 0.001) {    
    if (Math.pow(approxRoot, n) > x) {
      upperBound = approxRoot
    } else if ((Math.pow(approxRoot, n) < x)) {
      lowerBound = approxRoot
    } else {
      break
    }
    approxRoot = (upperBound + lowerBound) / 2
  }
  return approxRoot.toFixed(3)
}

console.log(root(7, 3), 1.913)
console.log(root(9, 2), 3)
