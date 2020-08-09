  
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let count = 0
  x = x.toString(2)
  y = y.toString(2)
  let diff = x.length - y.length

  if (diff < 0) {
    x = '0'.repeat(Math.abs(diff)) + x
  }

  if (diff > 0) {
    y = '0'.repeat(Math.abs(diff)) + y
  }

  x = x.split('')
  y = y.split('')
  console.log(x, y)
  x.forEach((a,i) => {
    if (a - y[i]) {
      count += 1
    }
  })
  return count
};

console.log(hammingDistance(1, 4), 2)
console.log(hammingDistance(3, 1), 1)

/*
Input: x = 1, y = 4
Output: 2

Explanation:
2   ^3^2^1^0
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
2^ 22^1 2^0

2 - 0 = 2
*/
