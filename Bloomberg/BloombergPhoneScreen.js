// Bloomberg Phone Screen 10.02.20

/*

Given a string which may contain brackets ()[]{}
-- You are guaranteed that the brackets are balanced and correctly formatted
We can think of the brackets as dividi  r

ab, c, d, e
0   1  2  1



Write a function that takes in a string and returns an array of the most deeply nested, or innermost, substrings

"[a{{b}c}d(e)]"  ->  ["b"] -> max 3
"((a)b(cd)ef)"    ->  ["a", "cd"]
"(ab[]c){d{e}}"  ->  ["", "e"]
"Hello, World!"  ->  ["Hello, World!"]

"( ['hello world'] {[[]]})" -> ['', '']
 1 2             1       curr
 0 2             2       max

"( [(((a) ), a), b] " -> ['a']

Observation
maxDepth = 0
currDepth = 0
result = []

Iterate over once, grab max depth,
then do a second pass and whenever we hit an element or empty string in that
max depth then we can add it to our result array

return result array

Brute Force
two for loops

  i = 0 to str.length - 1
    j = i + 1 to str.length

    At i an j to to match the same closing and opening parens
    make a clone of that string from i to j and grab our
    innermost elements in our brackets

    if our brackets match, move both pointers closer together


*/

// I can't hear the phone anymore, but I can still step through the code with comments

//. 0 1 2 3 4 5 6 7 8 9 10 11 12
// "( a b [ ] c ) { d { e  }  }"  ->  ["", "e"]
//  1 1 1 2 2 2 2 2 2 2 2  2  2  maxdepth
//  1 1 1 2 1 1 0 1 1 2 2  1  0  currDepth
//  1 1 1 2 1 1 0 1 1 2 2 1   0    secondDepth

// Time O(n) elements in the str
// Space O(r) result depth elements are
const maxDepthBrackets = str => {
  let maxDepth = 0;
  let currDepth = 0;
  const result = []; // ['', 'e']

  for (let i = 0; i < str.length; i++) {
    // Time O(n)
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      currDepth += 1;
      maxDepth = Math.max(maxDepth, currDepth);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      currDepth -= 1;
    }
  }

  if (maxDepth === 0) {
    result.push(str)
    return result
  }


  let secondDepth = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      secondDepth += 1;
      if (secondDepth === maxDepth) {
        let currEles = ''; // 'e'
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] === '}' || str[j] === ')' || str[j] === ']') {
            secondDepth -= 1;
            result.push(currEles);
            i = j; // O(n)
            break;
          } else {
            currEles += str[j];
          }
        }
      }
    } else if (str[i] === '}' || str[i] === ')' || str[i] === ']') {
      secondDepth -= 1;
    }
  }

  return result;
};

console.log(maxDepthBrackets("[a{{b}c}d(e)]" ), ["b"])
console.log(maxDepthBrackets("((a)b(cd)ef)"), ["a", "cd"])
console.log(maxDepthBrackets('(ab[]c){d{e}}'), ['', 'e']);
console.log(maxDepthBrackets("Hello, World!"), ["Hello World!"])
