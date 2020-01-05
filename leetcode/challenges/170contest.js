// https://leetcode.com/contest/weekly-contest-170

/*
EASY
5303. Decrypt String from Alphabet to Integer Mapping
Given a string s formed by digits ('0' - '9') and '#'. 
We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.  Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

Example 1:
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:
Input: s = "1326#"
Output: "acz"

Example 3:
Input: s = "25#"
Output: "y"

Example 4:
Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
Output: "abcdefghijklmnopqrstuvwxyz"
*/

// I'm fucking sleepy yooooooo
// and I'm an idiot for some reason

// hash our values to their respective outputs
// if the alphabet char equals the string
// then add it to our final string
// return our final string

/*
const alpha = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
}

var freqAlphabets = function(s) {
};

const s1 = "10#11#12"
const o1 = "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

const s2 = "1326#"
const o2 = "acz"

const s3 = "25#"
const o3 = "y"

const s4 = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
const o4 = "abcdefghijklmnopqrstuvwxyz"

console.log(freqAlphabets(s1), o1)

console.log(" ")
console.log("--freqAlphabets--")
console.log(" ")
*/





/*
MEDIUM
5304. XOR Queries of a Subarray

Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri], 
for each query i compute the XOR of elements from Li to Ri 
(that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri]). 
Return an array containing the result for the given queries.
 
Example 1:
Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
Output: [2,7,14,8] 

Explanation: 
The binary representation of the elements in the array are:
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 

The XOR values for queries are:
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8

Example 2:
Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
Output: [8,0,4,4]
*/

var xorQueries = function(arr, queries) {
  return arr
};

const arr1 = [1,3,4,8]
const queries1 = [[0,1],[1,2],[0,3],[3,3]]
const output1 = [2,7,14,8] 

const arr1 = [4,8,2,10]
const queries1 = [[2,3],[1,3],[0,0],[0,3]]
const output1 = [8,0,4,4]

console.log(xorQueries(arr1, queries1), output1)
console.log(xorQueries(arr2, queries2), output2)

console.log(" ")
console.log("--xorQueries---")
console.log(" ")






/*
MEDIUM
5305. Get Watched Videos by Your Friends
There are n people, each person has a unique id between 0 and n-1. 
Given the arrays watchedVideos and friends, where watchedVideos[i] and friends[i] contain 
the list of watched videos and the list of friends respectively for the person with id = i.

Level 1 of videos are all watched videos by your friends, level 2 of videos are all watched 
videos by the friends of your friends and so on. 

In general, the level k of videos are all watched videos by people with the shortest path equal 
to k with you. 

Given your id and the level of videos, 
return the list of videos ordered by their frequencies (increasing). 

For videos with the same frequency order them alphabetically from least to greatest.

Example 1:
Input: watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1
Output: ["B","C"]

Explanation:
You have id = 0 (green color in the figure) and your friends are (yellow color in the figure):
Person with id = 1 -> watchedVideos = ["C"]
Person with id = 2 -> watchedVideos = ["B","C"]
The frequencies of watchedVideos by your friends are:
B -> 1
C -> 2

Example 2:
Input: watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 2
Output: ["D"]

Explanation:
You have id = 0 (green color in the figure) and the only friend of your 
friends is the person with id = 3 (yellow color in the figure).
*/

var watchedVideosByFriends = function(watchedVideos, friends, id, level) {

};

const watch1 = [["A","B"],["C"],["B","C"],["D"]]
const friends1 = [[1,2],[0,3],[0,3],[1,2]]
const id1 = 0
const level1 = 2
const output1 = ["D"]

const watch2 = [["A","B"],["C"],["B","C"],["D"]]
const friends2 = [[1,2],[0,3],[0,3],[1,2]]
const id2 = 0
const level2 = 1
const output2 = ["B","C"]

console.log(watchedVideosByFriends(watch1, friends1, id1, level1), output1)
console.log(watchedVideosByFriends(watch1, friends1, id1, level1), output2)

console.log(" ")
console.log('--watchVideosByFriends--')
console.log(" ")




/* 
HARD
5306. Minimum Insertion Steps to Make a String Palindrome

Given a string s. In one step you can insert any character at any index of the string.
Return the minimum number of steps to make s palindrome.
A Palindrome String is one that reads the same backward as well as forward.

Example 1:
Input: s = "zzazz"
Output: 0
Explanation: The string "zzazz" is already palindrome we don't need any insertions.

Example 2:
Input: s = "mbadm"
Output: 2
Explanation: String can be "mbdadbm" or "mdbabdm".

Example 3:
Input: s = "leetcode"
Output: 5
Explanation: Inserting 5 characters the string becomes "leetcodocteel".

Example 4:
Input: s = "g"
Output: 0

Example 5:
Input: s = "no"
Output: 1
*/

/*
var minInsertions = function(s) {
  let rev = s.split('').reverse().join('')
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== rev[i]) {
      count += 1
    }
  }
  return count
};

const s1 = "zzazz"
const s2 = "mbadm"
const s3 = "leetcode"
const s4 = "g"
const s5 = "no"

console.log(minInsertions(s1), 0)
console.log(minInsertions(s2), 2)
console.log(minInsertions(s3), 5)
console.log(minInsertions(s4), 0)
console.log(minInsertions(s5), 1)

console.log(" ")
console.log("minInsertions")
console.log(" ")
*/

