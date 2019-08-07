Question:

Write a program to perform basic string compression using the counts of repeated characters.

For example, the string, "aabcccccaaa" would become "a2blc5a3". If the "compressed" string would not become smaller than the original string, your method should return the original string.



Example:

1) Input: "apple"

Output: "apple"

Explanation: The original string is returned because the compressed version, "a1p2l1e1" is not shorter than the original string.

2) Input: "abbbcccddaaaa"

Output: "a1b3c3d1a4"

Solution:

This question usually serve as a warm up question in your interview round.

The idea is to simply iterate each character in the input string while maintaining a counter for the current character contiguous occurrences. When a character doesn't match with the next adjacent character, concatenate the key with its frequency in the result variable.

Assuming the concatenation operation is O(1), the time and space complexity of this algorithm is O(n).





1) Input: "apple"

Output: "apple"

Explanation: The original string is returned because the compressed version, "a1p2l1e1" is not shorter than the original string.

2) Input: "abbbcccddaaaa"

Output: "a1b3c3d1a4"


function compressChar(str) {
  let i = 0,
    l = str.length,
    count = 0,
    result = str[0];

  for (; i < l; i++) {
    count++;

  if (i === (l - 1)){
    result += count;
  }  else if (str[i] !== str[i + 1]) {
    result += count + str[i + 1];
    count = 0;	  
  }
  }	
}
