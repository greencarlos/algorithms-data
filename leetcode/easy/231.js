// https://leetcode.com/problems/power-of-two/
// check if a number is a power of 2

var powerOf2 = function(n) {
  while(n>=2) {
    n = n/2;
  }
  return n === 1 ? true: false;
}

console.log(powerOf2(16), true) // true
// 2^4 => 16
console.log(powerOf2(1), true) // true
// 2^0 => 1
console.log(powerOf2(3), false) // false 
console.log(powerOf2(218), false) // false 
