/*WE Pay

WePay Software Engineering OA - Fall 2019

Thank you for taking the time to apply here at WePay for one of our engineering positions. After having the chance to review your application we would like to invite you to take one of our code challenges! This is the first step in our short hiring process and a fun technical coding challenge. 
We'll give you plenty of time to take our tests, so please be sure to set aside an hour to 90 minutes (again, plenty of extra time) of time to complete our coding challenges.
 Please remember the coding portion of this test will be judged on code cleanliness, not just functionality. Write nice, clean code. 
 
Best Regards,
 
WePay's Hiring Team
 
You have been invited to attend the challenge WePay Software Engineering OA - Fall 2019. You can take this challenge any time. The duration of the challenge will be 90 mins from the time you start.
Start Challenge
You can also use this link to access the challenge.
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0)  { 
      console.log("Fizz")
    }
    else if (i % 3 !== 0 && i % 5 === 0)  { 
      console.log("Buzz")
    }
    else if (i % 3 === 0 && i % 5 === 0)  { 
      console.log("FizzBuzz")
    }
    else { 
      console.log(i)
    }
  }
}

console.log("---FizzBuzz---")
console.log(fizzBuzz(15))
console.log(" ")


/*
https://en.m.wikipedia.org/wiki/Gregorian_calendar

(Pride cometh before the fall)
Ada Lovelace Day

Ada Lovelace Day, celebrating Ada, Countess of Lovelace as the first computer programmer, is traditionally celebrated on the second Tuesday of October each year.

Write a function that takes a year in the Gregorian calendar as an integer and returns the day of October on which Ada Lovelace Days falls, also as an integer. For example, given 2018 you should return 9 (since the 9th of October is the second Tuesday in October of 2018)

Your function does not have to account for non-gregorian calendars or null years. You may use, and refer to documentation on, calendar, date, and related libraries in the language of your choice for this question.

Input1:   2018
Output1: 9

Input2:    2019
Output2: 10

Input3: 1942
Output: 24
*/



const input1 = 2018
const output1 = 9

function ada(year) {
  let coolio = year + ''
  let nice = coolio.slice(2, 4)
  let sweet = parseInt(nice)
  return year % 30 + 1
}

console.log("---Ada----")
console.log(ada(input1), output1)
console.log(" ")


/*
Sliding Blocks

A sliding Block Puzzle is a type of puzzle in which an N by M rectangular grid contains a single blank space and (N*M)-1 numbered tiles. The goal of the puzzle is to arrange the puzzle such that the numbers are ordered left-to-right, top-to-bottom, with the empty space in the top left. This is achieved by repeatedly sliding adjacent tiles into the empty space and thus rearranging the puzzle.

You will implement a function that will take a puzzle (represented as a 2d array of integers, with 0 representing the blank space) and return the minimum number of moves to bring it to a solution. If the puzzle has no solution, you should return -1.


Input1:
3
3
0 1 2
3 4 5
6 7 8

Output1: 0


Input2:
3
3
1 0 2
3 4 5
6 7 8

Output2: 1


Input3:
3
3
1 4 2
3 0 5
6 7 8

Output3: 2


Input4:
3
3
2 7 1
6 3 5
0 4 8

Output4: 20
*/

const arr1 = [
  [1,6,3],
  [8,7,2],
  [4,0,5]
]

const arr2 = [
  [0,1,2],
  [3,4,5],
  [6,7,8]
]

function movesToSolve(puzzle) {
  let sortedArr = puzzle.flat().sort()
  const newArr = []

  for (let i = 0; puzzle.length; i+=2) {
    for (let j = 0; puzzle[i].length; j++) {
      newArr.push([i, i + 1, i + 2])
    }
  }
  return newArr
}

console.log("--puzzles---")
console.log(movesToSolve(arr1), arr2)
