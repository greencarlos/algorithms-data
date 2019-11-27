// for loop iteration
const ForFib = function(n) {
  if (n < 2) return [1]
  const seq = [1, 1]

  for (let i = 2; i < n; i++) {
    let first = seq[seq.length - 1]
    let second = seq[seq.length - 2]
    let sum = first + second
    seq.push(sum)
  }
  return seq
}

// while loop iteration
const WhileFib = function(n) {
  if (n < 2) return [1]
  const seq = [1, 1]

  let i = 2;
  while(i < n) {
    let first = seq[seq.length - 1]
    let second = seq[seq.length - 2]
    let sum = first + second
    seq.push(sum)
    i++
  }
  return seq
}

// recursion
const RecFib = function(n) {
  if (n === 1 || n === 2) return 1
  return RecFib(n - 2) + RecFib(n - 1)
}

// Javascript Implementation
/**
* Avoid 53-bit limit of JS’s default number
* Type. This fib(79) is 14472334024676221n
* Not 14472334024676220
**/
function JSFib(n) {
  let [a, b] = [0, 1]
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b]
  }
  return a
}

console.log("--ForFib---")
console.log(" ")
console.log(ForFib(1), 'ForFib')
console.log(ForFib(5), 'ForFib')
console.log(ForFib(10), 'ForFib')
console.log(" ")
console.log("--WhileFib---")
console.log(" ")
console.log(WhileFib(1), 'WhileFib')
console.log(WhileFib(5), 'WhileFib')
console.log(WhileFib(10), 'WhileFib')
console.log(" ")
console.log("---RecFib---")
console.log(" ")
console.log(RecFib(1), 'RecFib')
console.log(RecFib(5), 'RecFib')
console.log(RecFib(10), 'RecFib')
console.log(" ")
console.log("--JSFib--")
console.log(" ")
console.log(JSFib(1), 'JSFib')
console.log(JSFib(5), 'JSFib')
console.log(JSFib(10), 'JSFib')
