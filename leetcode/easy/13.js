// https://leetcode.com/problems/roman-to-integer/

/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.  
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
**/

var romanToInt = function(s) {
  const mapNum = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
  let r = 0, i = 0;
  while (i < s.length - 1) {
    if (mapNum[s[i]] >= mapNum[s[i + 1]]) {
      r += mapNum[s[i]]
      i++
    } else {
      r += mapNum[s[i + 1]] - mapNum[s[i]]
      i += 2
    }
  }
  if (i === s.length - 1) {
    r += mapNum[s[i]]
  }
  return r 
};


const input1 = "III"
console.log(romanToInt(input1), 3)

const input2 = "IV"
console.log(romanToInt(input2), 4)

const input3 = "V"
console.log(romanToInt(input3), 5)

const input4 = "VI"
console.log(romanToInt(input4), 6)

const input5 = "VII"
console.log(romanToInt(input5), 7)

const input6 = "VI"
console.log(romanToInt(input6), 6)

const input7 = "IX"
console.log(romanToInt(input7), 9)

const input8 = "X"
console.log(romanToInt(input8), 10)

const input9 = "XI"
console.log(romanToInt(input9), 11)

/*
const input10 = "LVIII"
console.log(romanToInt(input10), 58)
//Explanation: L = 50, V= 5, III = 3.

const input11 = "MCMXCIV"
console.log(romanToInt(input11), 1994)
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
