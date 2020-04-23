/**
 * @param {string} S
 * @return {string}
 */

var toGoatLatin = function(S) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  let arr = S.split(' ')

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (vowel.indexOf(word[0].toLowerCase()) > -1) {
      word += 'ma'
    } else {
      word += word[0]
      word = word.slice(1) + 'ma'
    }
    for (let j = 0; j <= i; j++) {
      word += 'a'
    }
    arr[i] = word
  }

  return arr.join(' ')
};
