// https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/ 
/* Given a function f(x, y) and a value z, 
return all positive integer pairs x and y where f(x,y) == z.
The function is constantly increasing, i.e.:

f(x, y) < f(x + 1, y)
f(x, y) < f(x, y + 1)

Example 1:
Input: function_id = 1, z = 5
Output: [[1,4],[2,3],[3,2],[4,1]]
Explanation: function_id = 1 means that f(x, y) = x + y

Example 2:
Input: function_id = 2, z = 5
Output: [[1,5],[5,1]]
Explanation: function_id = 2 means that f(x, y) = x * y

Constraints:
1 <= function_id <= 9
1 <= z <= 100
It's guaranteed that the solutions of f(x, y) == z will be on the range 1 <= x, y <= 1000
It's also guaranteed that f(x, y) will fit in 32 bit signed integer if 1 <= x, y <= 1000 */

var findSolution = function(customfunction, z) {
  const func = customfunction.f;

  let res = []
  for (let i = 1; i <= z; i++) {
    for (let j = 1; j <= z; j++) {
      if (func(i,j) === z) {
        res.push([i, j])
      }
    }
  }
  return res;
};

const output1 = [[1,4],[2,3],[3,2],[4,1]]
const output2 = [[1,5],[5,1]]

console.log(findSolution(2, 5))
console.log("output1:", output1)
console.log(findSolution(1, 5))
console.log("output2:", output2)
