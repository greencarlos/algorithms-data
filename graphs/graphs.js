"use strict";

const one = {val:1, adjacent: []};
const two = {val:2, adjacent: []};
const three = {val:3, adjacent: []};
const four = {val:4, adjacent: []};
const five = {val:5, adjacent: []};
const six = {val:6, adjacent:[]};

one.adjacent.push(two);
one.adjacent.push(four);

two.adjacent.push(five);

three.adjacent.push(five);
three.adjacent.push(six);

four.adjacent.push(two);
four.adjacent.push(four);

six.adjacent.push(six);

console.log(one)

// (1) ---> (2)    (3)
//  |      / |     /|
//  |     /  |    / |
//  |    /   |   /  |
//  |   /    |  /   |
//  |  /     | /    |
//  (4)     (5)    (6)


// Adjency List
//  1[] -> 2[] -> 4[]
//  2[] -> 5[]
//  3[] -> 6[] -> 5[]
//  4[] -> 2[]
//  5[] -> 4[]
//  6[] -> 6[]
//

// Adjency Matrix
const matrix = [
 [0, 1, 0, 1, 0, 0], //1
 [0, 0, 0, 0, 1, 0], //2
 [0, 0, 0, 0, 1, 0], //3
 [0, 1, 0, 0, 0, 0], //4
 [0, 0, 0, 1, 0, 0], //5
 [0, 0, 0, 0, 0, 1], //6
];

console.log(matrix);
