/*
function isPrime(x, i = 2) {
  if (x < 2) return false
  if (i === x) return true
  if (x % i === 0) return false
  return isPrime(x, i + 1)
} */

function isPrime(x) {
  // your code here
  if (x <= 1) {
		return false;
	}
  let sqrt = Math.ceil(Math.sqrt(x));
	for (let i = 2; i <= sqrt; i++) {
		if (x % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(1))
// false
console.log(isPrime(4))
// false
console.log(isPrime(7))
// true
console.log(isPrime(13))
// true
