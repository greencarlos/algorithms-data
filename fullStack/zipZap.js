function zipZap(x) {
  let counter = 0
  while (x > 0) {
    counter += x & 1 ? 1 : 0,
    x = x >> 1;
  }
  return counter
}

console.log(zipZap(5))
// 2
