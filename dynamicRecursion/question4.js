/* 4)  Given a string, compute recursively (no loops)
the number of times lowercase "th" appears in the string.
*/


function countTh(str, i = 0, count = 0) {
  if (i === 0) { str = str.split('') }
  if (str[i] === 't' && str[i + 1] === 'h') { count += 1; }
  if (i === str.length) return count; 
  return countTh(str, i + 1, count);
} 


console.log(countTh('thapple')) // 1
console.log(countTh('thappthle')) // 2

