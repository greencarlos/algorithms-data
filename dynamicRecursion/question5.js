/* 5) A child is running up a staircase with
n steps, and can hop either 1 step, 2 steps, or 3 steps at a time.
Implement a method usiong recursion to count
how many possible ways the child can run up the stairs.
*/

// Hint: branching recursion

/*
function countWays(n, i = 0) {
  if (i === n) return i;
  n[n - 1]
  n[n - 2]
  n[n - 3]
  return countWays(n, i + 1);
}


console.log(countWays(8));
console.log(countWays(10));
*/

// fib(1) // => 1
// fib(2) // => 1
// fib(3) // => 2
// fib(4) // => 3
// fib(5) // => 5
// fib(6) // => 8
// fib(7) // => 13


function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2) + fib(n - 3);
}


// fib(1) // => 1
// fib(2) // => 1
// fib(3) // => 2
// fib(4) // => 3
console.log(fib(5))
console.log(fib(6)) 
console.log(fib(7)); // => 13
