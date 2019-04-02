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

==================================================================================

1) For a triangle structure that is made of carved stone, the topmost level has 1 carved stone, the next level down has 2 carved stones, the next level has 3 carved stones, and so on.

Compute recursively the total number of carved stones used to construct the triangle structure with the specified number of level.

*Can you clarify the design aspects with LiNeBase?

If N = 3, return 6

                1        - level  1
              1  1      - level 2
            1  1  1    - level 3

Li - linear. f(N) = N + f(N-1)
Ne - no nested function
Base - n === 0, return 0. Prefer -> N < 2, return n

function countTriangleStone (n) {
  // your code here
  
}

2) A child is running up a staircase with N steps, and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs. Use recursive approach.

*Can you clarify the design aspects with LiNeBase?

function staircase(N) {
    // your code here
}

Li - branching. f(n) = f(n-1) + f(n-2) + f(n-3).
You know the big problem here f(n). Let say n = 5 steps.
4 steps, 3 steps, 2 steps
Base -  (Joseph) 1 - return 1, 2 - return 2, 3 return 4
N = 2 steps, the child can still choose to hop 1, 2, 3 steps
                                             5
                            4               3                     2
                     3   2   1       2   1   0       1       0               -1 
                                                                 (good, 3  + 2 = 5)

1 stair case remaining for the kid to finish running
The kid has 3 choices
0 stair case remaining, -1, -2

If ( n === 0) {
   return 1
} else if ( n < 0) {
   return 0
}

return staircase(N - 1) + staircase(N - 2) + staircase( N - 3);

Staircase N = 3
[3, 2, 1, 0] - 1 way (the kid hops 1 step -> 1 step -> 1 step)
[3, 2, 1, -1] - 0 way (the kid hops 1 step -> 1 step -> 2 steps)

Top-down thinking approach
Staircase - 3 steps, 2 steps, 1 steps( ? way), 0 step (1 way)



Ne - 

Staircase (N) = 3. Child has the options - 1, 2, 3 steps
{1,2,3} - 1 way (1 step, 1 step, 1 step)
{0,1,3} - 1 way ( 1 step, and then 2 steps)
{0,2,3} - 1 way (child hops 2 steps, and then 1 step)
{0,3} - 1 way (child hop 3 steps)

The child starts from 0, how many steps hop through.
1 -> 1, 1 -> 2, 1 -> 3 (1 way) - bottom up thinking approach

Top-down thinking approach
Staircase - 3 steps in the stair case, 2 steps, 1 step remaining( ?way), 0 step (1 way)
1 step remaining - 1, 2, 3
                 _x_
              _|
           _|
        _|
Kid_|

Top - down thinking approach - solve recursion solution
Hop 1 step, 2 step remaining
       Hop 1 step, 1 step remaining
           Hop 1 step, 0 step remaining   - 1 way {1, 1, 1}

Hop 1 step, 2 step remaining
       Hop 2 step, 0 step remaining      - 1 way {1, 2}

Hop 1 step, 2 step remaining
       Hop 3 step, -1 step remaining    - 0 way {1, 3}

…
…

Bottom - up thinking approach - iterative solution
Hop 1 step, staircase 1
       Hop 1 step, stair case 2
           Hop 1 step, stair case 3   - 1 way {1, 1, 1}

Hop 1 step, staircase 1
       Hop 2 step, starircase 3      - 1 way {1, 2}

Hop 1 step, stair case 1
       Hop 3 step, stair case 4       - 0 way {1, 3}

fib(N) = fib(N-1) + fib(N-2)
stairCase(N) = stairCase(N - 1) + stairCase(N-2) + stairCase(N - 3)
editWord(N) = stairCase(N - 1) + stairCase(N-2) + stairCase(N - 3)

Initial word -> 3 transformations(delete, replace, addition of character) -> target word 

3) Implement binary search given a sorted array and a target key. Return the index of the found key, or -1 if not found. Use recursive approach.

*Can you clarify the design aspects with LiNeBase?

function binarySearch(arr, target) {
    // your code here
}

How binary search works? Say given the sorted array below - [1,4,4,7,7,8,11,19,21,23,24,30], and the target key, 19.



****************************************************************
Solution (copy paste your solution here with your name):
****************************************************************

**  YOUR NAME and SOLUTION here**
// Raju - Golang
func countTriangleStone(n int) int {
	if n < 2 {
		return n
	}

	return n + countTriangleStone(n-1)
}






// Carlos

function countTriangleStone (n) {
  if (n < 2) return n
  return n + countTriangleStone(n - 1)
}

//If N = 3, return 6
console.log(countTriangleStone(3))



// SOLUTION #2


Joseph

private static int staircase(int num) {
	if (num == 1) return 1;
	if (num == 2) return 2;
	if (num == 3) return 4;
		
	return staircase(num - 1) + staircase(num - 2) + staircase(num - 3);
}


