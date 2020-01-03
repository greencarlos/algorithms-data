// https://leetcode.com/problems/valid-palindrome/

/*
* Given a string, determine if it is a palindrome,
* considering only alphanumeric characters and ignoring cases.
* Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
**/

var isPalindrome = function(s) {
  var i = 0;
  var j = s.length - 1;
  var regex = /[a-z0-9]/i
  while( i <= j) {
    if (!regex.test(s[i])) {
      i++
    } else if (!regex.test(s[j])) {
      j--;
    } else if (s[i++].toLowerCase() !== s[j--].toLowerCase()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("race a car"), false)
// false

console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
// true
