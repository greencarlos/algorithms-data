// https://leetcode.com/problems/length-of-last-word/

/* Given a string s consists of upper/lower-case alphabets and empty space characters 
' ', return the length of last word in the string.

If the last word does not exist, return 0.
Note: A word is defined as a character sequence consists of non-space characters only.

Example:
Input: "Hello World"
Output: 5
*/ 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) return 0
  s=s.trim()
  if (s.localeCompare("")==0) return 0
    var str = s.split(" ")
    var size = str.length - 1
    return str[size].length
};

const input1 = "Hello World"
console.log(lengthOfLastWord(input1), 5)
