// https://leetcode.com/problems/shortest-palindrome/

/* Given a string s, you are allowed to convert it to a palindrome 
by adding characters in front of it. 

Find and return the shortest palindrome 
you can find by performing this transformation.

Example 1:
Input: "aacecaaa"
Output: "aaacecaaa"

Example 2:
Input: "abcd"
Output: "dcbabcd"
*/
/**
 * @param {string} s
 * @return {string}
**/
var shortestPalindrome = function(s) {
  var prefix = ""
  var pos, head, tail

  for (pos = head = tail = parseInt(s.length / 2); pos > 0; head = tail = --pos) {
    while(head !== 0 && s[head - 1] === s[head]) {
      head--; pos--;
    }
    while(tail != s.length - 1 && s[tail + 1] === s[tail]) {
      tail++;
    }
    var isSame = true;
    while (head >= 0) {
      if (s[head] !== s[tail]) {
        isSame = false;
        break;
      }
      head--; tail++;
    }
    if (isSame) {
      break;
    }
  }

  for (var k = s.length - 1; k >= tail && k !== 0; k--) {
    prefix += s[k]
  }
  return prefix + s
};

const input1 = "aacecaaa"
const output1 = "aaacecaaa"
const input2 = "abcd"
const output2 = "dcbabcd"

console.log(shortestPalindrome(input1), output1)
console.log(shortestPalindrome(input2), output2)

