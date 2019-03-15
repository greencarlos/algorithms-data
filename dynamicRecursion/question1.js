/* 1) Given a non-negative int n, and a target single digit,
return the count of the occurrences of the target single digit.
So for example when n is 8218, and target digit is 8, the
program shall return 2. Do not use iterative (loop) approach but recursive algorithm.

// Hint: mod (%) by 10 yields the rightmost digit ( 912 % 10 is 2), 
while divide (/) by 10 and apply parseInt on its result removes the
rightmost digit ( parseInt(587 / 10) is 58 ).
*/


function countDigit(n, targetDigit, i = 0) {
  if (n % targetDigit === i) return i;
  return countDigit(n, targetDigit, i + 1);
}

console.log(countDigit(8218, 8)) // 2
console.log(countDigit(912, 10)) // 2
