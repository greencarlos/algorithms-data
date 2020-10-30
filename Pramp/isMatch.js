// console.log(isMatch("acd", "ab*c."), true)
function isMatch(text, pattern) {
  let result = '' //  'acd'
  let tP = 0 // 1, 2, 3
  let pP = 0 // 1, 2, 3, 4, 5
  
  while(tP < text.length && pP < pattern.length) {
    if (pattern[pP] === '.') {
      result += text[tP]
      
      pP += 1
      tP += 1
    } else if (pattern[pP] === text[tP]) {
      result += text[tP]
      
      tP += 1
      pP += 1
    }  else if (pattern[pP] === '*') {
      const count = countChar(tP, text, pattern[pP - 1])
      result += pattern[pP - 1].repeat(count)
      
      pP += 1
    } else if (pattern[pP] !== text[tP]) {
      pP += 1
    }
  }
  
  return result === text
}

function countChar(index, text, elem) {
  let count = 0
  
  for (let i = index; i < text.length; i++) {
    if (text[i] === elem) {
      count += 1
    } else {
      break
    }
  }
  
  return count
}


console.log(isMatch("aa", "a"), false)
console.log(isMatch("aa", "aa"), true)
console.log(isMatch("abc", "a.c"), true)
console.log(isMatch("abbb", "ab*"), true)
console.log(isMatch("acd", "ab*c."), true)

/*
Time O(n + m) m = text length and n = pattern length
Time (n)
Space O(m) = result string text length

'.' -> wildcard
'*' -> repeat of zero or more sequences of the previous letter


create a result string
Iterate over characters of pattern

Two Pointers

if char is a '.' wildcard then add the text char to result string
if char is a '*' repeat then count how many times the previous
character is repeated then add that to our result string

if they do match, then add the char to our result string

check if our result and text are the same, boolean


 01 index
"aa" text

 0 index
"a" pattern

res = 'a' doesn't match 'aa', output: false

-----

 0123 = index
"abbb" = txt,

 012
"ab*" = pattern

res = 'abbb' compare to txt, output: true

--- 

 012 = index
"acd" = txt
   ^
 tP

 01234 = index
"ab*c." = pattern
     ^
 pP

res = 'acd' matches txt, output: true

*/
