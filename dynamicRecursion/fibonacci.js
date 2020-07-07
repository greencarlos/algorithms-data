// O(n^2)
// Brute Force
// Recursion
const fib = n => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

var fib = function(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

fib = memo(fib);

function memo(fn) {
  let cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

// O(n)
// Memoization
// Iterate
const fibo = (n, f = []) => {
  f[0] = 0;
  f[1] = 1;

  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};

// for loop iteration
const ForFib = function(n) {
  if (n < 2) return [1];
  const seq = [1, 1];

  for (let i = 2; i < n; i++) {
    let first = seq[seq.length - 1];
    let second = seq[seq.length - 2];
    let sum = first + second;
    seq.push(sum);
  }
  return seq;
};

// while loop iteration
const WhileFib = function(n) {
  if (n < 2) return [1];
  const seq = [1, 1];

  let i = 2;
  while (i < n) {
    let first = seq[seq.length - 1];
    let second = seq[seq.length - 2];
    let sum = first + second;
    seq.push(sum);
    i++;
  }
  return seq;
};

// Javascript Implementation
/**
 * Avoid 53-bit limit of JS’s default number
 * Type. This fib(79) is 14472334024676221n
 * Not 14472334024676220
 **/
function JSFib(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

console.log(fib(1), 1);
console.log(fib(5), 5);
console.log(fib(10), 10);
console.log(' ');
console.log(fibo(1), 1);
console.log(fibo(5), 5);
console.log(fibo(10), 10);
console.log(' ');
console.log('--ForFib---');
console.log(' ');
console.log(ForFib(1), 'ForFib');
console.log(ForFib(5), 'ForFib');
console.log(ForFib(10), 'ForFib');
console.log(' ');
console.log('--WhileFib---');
console.log(' ');
console.log(WhileFib(1), 'WhileFib');
console.log(WhileFib(5), 'WhileFib');
console.log(WhileFib(10), 'WhileFib');
console.log(' ');
console.log('--JSFib--');
console.log(' ');
console.log(JSFib(1), 'JSFib');
console.log(JSFib(5), 'JSFib');
console.log(JSFib(10), 'JSFib');
