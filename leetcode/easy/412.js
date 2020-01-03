// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
**/

var fizzBuzz = function(n, i = 1, arr = []) {
  if (n < 0) return n
  if (i > n) return arr
  if (i % 3 !== 0 && i % 5 !== 0) {arr.push(i + '')}
  if (i % 3 === 0 && i % 5 !== 0) {arr.push("Fizz")}
  if (i % 3 !== 0 && i % 5 === 0) {arr.push("Buzz")}
  if (i % 3 === 0 && i % 5 === 0) {arr.push("FizzBuzz")}
  return fizzBuzz(n, i + 1, arr)
};


const arr2 = [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

console.log(fizzBuzz(15))
console.log(" ")
console.log('Solution', arr2)
