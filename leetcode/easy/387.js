// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */

/*
Given a string, find the first non-repeating
character in it and return it's index. If it doesn't exist, return -1.

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
*/

/*
var firstUniqChar = function(string) {
  let newStr = string.split("")

  const hashing = (str, i = 0, hash = {}) => {
    if (i === str.length) return hash
    hash[str[i]] = (hash[str[i]] || 0) + 1
    return hashing(str, i + 1, hash)
  }

  let coolio = hashing(newStr)
  return Object.entries(coolio).filter(x => x[1] <= 1) 
}; */

/*
var firstUniqChar = function(str) {
  for (var i = 0; i < str.length; i++) {
    if (s.indexof(s[i]) === str.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}
*/

// Hash Map
var firstUniqChar = function(str) {
  var map1 = new Map()

  for (var i = 0; i < str.length; i++) {
    if (map1.has(str[i])) {
      map1.set(str[i], 2)
    } else {
      map1.set(str[i], 1)
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (map1.has(str[i]) && map1.get(str[i]) === 1) {
      return i
    }
  } 
  return -1
}

const str1 = "leetcode"
const str2 = "loveleetcode"

console.log(firstUniqChar(str1), 0)
console.log(firstUniqChar(str2), 2)
