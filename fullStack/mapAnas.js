

function groupAnagrams(arrStr) {
  // your code here
  let hashAnagram = {};
  let word = '';
  let result = [];

  for (let i = 0, l = arrStr.length; i < l; i++) {
    word = arrStr[i].split('').sort().join('');

    hashAnagram[word] = hashAnagram[word] || [];
    hashAnagram[word].push(arrStr[i]);
  }
  
  for (let key in hashAnagram) {
    result.push(hashAnagram[key]);
  }
    
  return result;
}

