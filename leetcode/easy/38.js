// https://leetcode.com/problems/count-and-say/

/*The count-and-say sequence is the sequence of
integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30,
generate the nth term of the count-and-say sequence.
Note: Each term of the sequence of integers will be represented as a string.
*/

/**
 * @param {number} n
 * @return {string}
 */

const countAndSay = function(n) {
    if (n === 1) return '1'

    let result = ''
    
    const prev = countAndSay(n - 1)
    
    for (let o = 0, i = 1; i <= prev.length; i++)
        prev[i] !== prev[o] && (result += `${i - o}${prev[o]}`, o = i)

    return result
};


console.log(countAndSay(1), "1")
console.log(countAndSay(4), "1221")
