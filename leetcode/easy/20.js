// https://leetcode.com/problems/valid-parentheses/

/*
Given a string containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
**/

var isValid = function(str) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{"
  }
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      arr.push(str[i])
    } else {
      if (arr[arr.length - 1] === map[str[i]]) {
        arr.pop()
      }
      else return false
    }
  }
  return arr.length === 0 ? true : false
}

const input1 = "()"
const input2 = "()[]{}"
const input3 = "(]"
const input4 = "([)]"
const input5 = "{[]}"

console.log(isValid(input1), true)
console.log(isValid(input2), true)
console.log(isValid(input3), false)
console.log(isValid(input4), false)
console.log(isValid(input5), true)

