// FOR LOOPS 
/*function generateRange(min, max, step){ const arr = []
  for (let i = min; i <= max; i += step) {
    arr.push(i)
  }
  return arr
}
*/

// RECURSION
/*const generateRange = function(min, max, step, arr = [], i = min) {
  if (i > max) return arr 
  arr.push(i)
  return generateRange(min, max, step, arr, i + step)
}
*/

// WHILE LOOP
var generateRange = function(min, max, step) {
  var arr = [] 
  var i = min
  while(i <= max) {
    arr.push(i)
    i+=step
  }
  return arr
}

console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]) 
// should return array of [2,4,6,8,10]
console.log(generateRange(1, 10, 3), [1, 4, 7, 10]) 
// should return array of [1,4,7,10]
