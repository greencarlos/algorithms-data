// Brute Force

// Turn both strings into arrays
// Iterate the first one
// if you hit a # splice it and the previous element

// join the strings 
// repeat for the second array
// check if they match

var backspaceCompare = function(A, B) {
  let gen = (str, s=[]) => {
    str.split('').forEach(c => {
      if (c !== '#') 
        s.push(c)
      else if (c === '#')
        s.pop()
    })
    return s.join('')
  }
  return gen(A) === gen(B)
};

const S1 = "ab#c"
const T1 = "ad#c"

const S2 = "ab##"
const T2 = "c#d#"

const S3 = "a##c"
const T3 = "#a#c"

const S4 = "a#c"
const T4 = "b"

console.log(backspaceCompare(S1, T1), true)
// Explanation: Both S and T become "ac".

console.log(backspaceCompare(S2, T2), true)
// Explanation: Both S and T become "".

console.log(backspaceCompare(S3, T3), true)
// Explanation: Both S and T become "c".

console.log(backspaceCompare(S4, T4), false)
// Explanation: S becomes "c" while T becomes "b".
