/*
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

var isHappy = function(n, cache = new Set(), sum = 1, res) {
  const sumArr = n.toString().split('');

  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i] * sumArr[i];
  }

  if (cache.has(sum)) {
    res= sum === 1;
  } else {
    cache.add(sum);
    isHappy(sum, cache, 1);
  }
  console.log(sum, 'sum');
  return res
};

console.log(isHappy(19), true);
console.log(isHappy(2), false);
