"use strict";
// Adjency Matrix
const one = {val:1, adj: []};
const two = {val:2, adj:[]};
const three = {val:3, adj:[]};
const four = {val:4, adj:[]};
const five = {val:5, adj:[]};
const six = {val:6, adj:[]};

one.adj.push(two)
one.adj.push(four)

two.adj.push(five)

three.adj.push(five)
three.adj.push(six)

four.adj.push(two)

five.adj.push(four)

six.adj.push(six)


const matrix = [
// 1  2  3  4  5  6
  [0, 1, 0, 1, 0, 0], //1
  [0, 0, 0, 0, 1, 0], //2
  [0, 0, 0, 0, 1, 1], //3
  [0, 1, 0, 0, 0, 0], //4
  [0, 0, 0, 1, 0, 0], //5
  [0, 0, 0, 0, 0, 1], //6
];

console.log(one);
console.log(matrix);

