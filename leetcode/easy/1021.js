// https://leetcode.com/problems/remove-outermost-parentheses/
// Remove the outer parenthesis

const str1 = "(()())(())"

/**
 * @param {string} S
 * @return {string}
 */
// get rid of the outer paranthesis
var removeOuterParentheses = function(str) {
  let res = '', leftNum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == '(') {
      leftNum++;
      if (leftNum == 2) {
        while(leftNum > 0) {
          res += str.charAt(i);
          str.charAt(++i) == '(' ? leftNum++ : leftNum--;
        }
      }
    }
    else leftNum--;
  }
  return res;
};

console.log(removeOuterParentheses(str1))

