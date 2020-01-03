// https://leetcode.com/problems/longest-common-prefix/

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
**/

var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i)
      }
    }
  }
  return strs[0]
}

const input1 = ["flower","flow","flight"]
const output1 = "fl"

const input2 = ["dog","racecar","car"]
const output2 = ""

console.log(longestCommonPrefix(input1), output1)
console.log(longestCommonPrefix(input2), output2)

