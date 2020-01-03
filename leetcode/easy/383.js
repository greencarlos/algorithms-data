// https://leetcode.com/problems/ransom-note/
/*
 Given an arbitrary ransom note string and 
 another string containing letters from all the magazines, 
 write a function that will return true if 

the ransom note can be constructed from the magazines ; otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

Time: O(n) + O(m)
Space: O(n)

  */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
**/

/*
var canConstruct = function(ransomNote, magazine) {
  let arr1 = ransomNote.split(" ")
  let arr2 = magazine.split(" ")
  let result = null

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true
      }
  }
  return result
};
*/

var canConstruct = function(ransomNote, magazine) {
  var map = {}
  var mchars = magazine.split('')
  var rchars = ransomNote.split('')

  var i;
  for (i = 0; i < mchars.length; i++) {
    map[mchars[i]] = (map[mchars[i]] || 0) + 1
    }

  for (i = 0; i < rchars.length; i++) {
    map[rchars[i]] = (map[rchars[i]] || 0) - 1
    if (map[rchars[i]] < 0) {
      return false
    }
  }
  return true
}

console.log(canConstruct("a", "b"), false)
console.log(canConstruct("aa", "ab"), false)
console.log(canConstruct("aa", "aab"), true)
console.log(canConstruct("abcc", "aabbcc"), true)
