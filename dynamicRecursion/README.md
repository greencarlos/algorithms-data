Background:
A recursive algorithm is an algorithm which
calls itself with "smaller (or simpler)" input values,
and which obtains the result for the current input by applyin
simple operations to the returned value for the smaller (or simpler) input.

Questions:

1)   Given a non-negative int n, and a target single digit, return the count of the occurrences of the target single digit. So for example when n is 8218, and target digit is 8, the program shall return 2. Do not use iterative (loop) approach but recursive algorithm.

// Hint: mod (%) by 10 yields the rightmost digit ( 912 % 10 is 2), while divide (/) by 10 and apply parseInt on its result removes the rightmost digit ( parseInt(587 / 10) is 58 ).
x
function countDigit (n, targetDigit) {
   ...
}

countDigit(8218, 8) // 2

*NOTE: should be Math.floor, not parseInt (at least to prevent TS complaining about types :), although parseInt also work)



2) Compute the value of power function power(x, n), given two integers x (base) and n (exponent, which is non-negative). Use recursion.

// Next, see if you can improve this with branching recursion

function power(x, n) {
   ...
}

power(2, 3) // 8
power(2, 4) // 16

3)  A magic index in an array[0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index. Assume there is always one magic number that exists in array A.

function findMagicIndex(array, startIndex, endIndex) {
     ...
}

let arr = [-40, -20, -1, 1, 2 ,3 ,5, 7, 9, 12, 13];
let startIndex = 0;
let endIndex = arr.length - 1;
findMagicIndex(arr, startIndex, endIndex); // 7

4)  Given a string, compute recursively (no loops) the number of times lowercase "th" appears in the string.

function countTh(str) {
  ...
}

countTh('thapple') // 1
countTh('thappthle') // 2


5) A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time.
Implement a method using recursion to count how many possible ways the child can run up the stairs.

Hint: use branching recursion.


function countWays( n ) {
	...
}

