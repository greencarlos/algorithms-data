// Cracking the Coding Interview
// https://github.com/Zonxa14/Cracking/blob/C-language/JavaScript/chapter08/solutions/tripleStep.js

/*
2) A child is running up a staircase with N steps,
and can hop either 1 step, 2 steps, or 3 steps at a 
time. Implement a method to count how many possible
ways the child can run up the stairs. Use recursive approach.

*Can you clarify the design aspects with LiNeBase?

function staircase(N) {
    // your code here
}

Li - branching. f(n) = f(n-1) + f(n-2) + f(n-3).
You know the big problem here f(n).
Let say n = 5 steps.
4 steps, 3 steps, 2 steps
Base -  (Joseph) 1 - return 1, 2 - return 2, 3 return 4
N = 2 steps, the child can still choose to hop 1, 2, 3 steps
                    5
    4               3               2
3   2   1       2   1   0       1   0   -1

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

Top down thinking approach --------------------------------------------------
Staircase - 3 steps, 2 steps, 1 steps( ? way), 0 step (1 way)

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

Top down thinking approach - solve recursion solution --------------------------
Hop 1 step, 2 step remaining
       Hop 1 step, 1 step remaining
           Hop 1 step, 0 step remaining   - 1 way {1, 1, 1}

Hop 1 step, 2 step remaining
       Hop 2 step, 0 step remaining      - 1 way {1, 2}

Hop 1 step, 2 step remaining
       Hop 3 step, -1 step remaining    - 0 way {1, 3}

Bottom up thinking approach - iterative solution --------------------------------
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
*/

function staircase(n){
  if (n === 0) return 1
  if (n < 0) return 0
  return staircase(n - 1) + staircase(n - 2) + staircase(n - 3)
}

console.log(staircase(1), 1) //1
console.log(staircase(2), 2) //2
console.log(staircase(3), 4) //4

