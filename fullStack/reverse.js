let str = "Hello"
/*
// ONE LINE
const solution = (str) => {
  return str.split('').reverse().join('')
}

// FOR LOOP
const solution = (str) => {
let newStr = ''

for (var i = str.length - 1; i > 0; i--) {
    newStr += str[i]
  }
  return newStr
}

// WHILE LOOP
const solution = (str) => {
  let i = str.length - 1
  let newStr = ''

  while (i !== -1) {
    newStr += str[i]
    i--
 }
  return newStr
}
*/

// RECURSION
const solution = (str, i = str.length - 1, newStr = '') => {
  if (i === -1) return newStr
  if (i === str.length - 1) {str = str.split('')} 
  return solution(str, i - 1, newStr + str[i])
}


// JACK'S SOLUTION
function reverseString(str) {
   if (str == 0) {
       return "";
   } else {
       return str[str.length - 1] + reverseString(str.substring(0,str.length - 1))
   }
}
console.log(reverseString("abcd"))
// "dcba"

console.log(reverseString(str))
console.log(solution(str))
// returns olleH


