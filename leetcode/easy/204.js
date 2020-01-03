/** https://leetcode.com/problems/count-primes/
Count the number of prime numbers
less than a non-negative number, n.
**/

var countPrimes = function(n) {
  let flagArr = [];
  let result = 0

  for (let i = 2; i < n; i++) {
    if (flagArr[i] === undefined) {
      flagArr[i] = 1
      result++
      let j = 2;
      while(i * j < n) {
        flagArr[i * j] = 0
        j++
      }
    }
  }
  return result
}

console.log(countPrimes(10), 4); 
// 4
// 2 + 3 + 5 + 7
