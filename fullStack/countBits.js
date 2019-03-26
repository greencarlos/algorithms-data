// function countBits(x) {
  // return x >> 1
// }

function countBits(x) {
  let counter = 0
  
  while(x > 0) {
    if (x & 1) {
      counter++;
    }
    x = x >> 1
  }
  return counter
}

console.log(countBits(5))
// 2
