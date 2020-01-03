// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Given a string, find the length of the longest 
substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 

Explanation: The answer is "abc", with the length of 3. 

Example 2:
Input: "bbbbb"
Output: 1

Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3

Explanation:
The answer is "wke", with the length of 3. 
Note that the answer must be a substring, 
"pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} str
 * @return {number}
**/

const input1 = "abcabcbb"

const input2 = "bbbbb"

const input3 = "pwwkew"

// Initial Attempt
/* var lengthOfLongestSubstring = function(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return j - i
      }
    }
  }
  return
}; */

var lengthOfLongestSubstring = function(str) {
  var start = 0, maxLen = 0;
  var map1 = new Map();

  for (var i = 0; i < str.length; i++) {
    var ch = str[i];

    if (map1.get(ch) >= start) start = map1.get(ch) + 1;
    map1.set(ch, i);

    if (i - start + 1 > maxLen) maxLen = i - start + 1;
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring(input1), 3)
console.log(lengthOfLongestSubstring(input2), 1)
console.log(lengthOfLongestSubstring(input3), 3)
