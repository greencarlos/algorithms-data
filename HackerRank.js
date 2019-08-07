"use strict";
/**

https://www.hackerrank.com/tests/csm48pdbn7a/questions/et5qmc98201

wordlist: ['APPLE', 'PLEAS', 'PLEASE']
puzzles: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']
Expected output: [0, 1, 3, 2, 0]
**/

const words = ['APPLE', 'PLEAS', 'PLEASE'];
const puzz = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY'];
//output: [0, 1, 3, 2, 0]

const words2 = [
'BEEHIVE',
'BEHOOVE',
'BERIBERI',
'BORER',
'BREVE',
'BRIBE',
'BRIER',
'EERIE',
'EERIER',
'ERROR',
'HERBIVORE',
'HIREE',
'HIRER',
'HOVER',
'REHIRE',
'REVERB',
'REVERE',
'REVERIE',
'REVIVE',
'RIVER',
'ROBBER',
'ROVER',
'VERVE',
'VIREO'
];

const puzz2 = [
'EBHIORV',
'BEHIORV',
'EBHIORX',
'EIRWXYZ',
'BHIORVX'
];
// Output: 24, 10, 11, 2, 0

let count = 0;
const newArr = [];

for (let i = 0; i < puzz.length; i++) {
  for (let j = 0; j < words.length; j++) {
    if (puzz[i].indexOf(words[j])) {
    console.log(count)
    console.log(puzz[i], words[j]);
    count += 1;
    }
  }
  newArr.push(count);
  count = 0;
}

function spellingBeeSolutions(wordlist, puzzles) {
// Write your code here
}

console.log(spellingBeeSolution(words, puzz));
// Output: 0, 1, 3, 2, 0
console.log(spellingBeeSolution(words2, puzz2));
// Output: 24, 10, 11, 2, 0
