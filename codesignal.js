/*Background

The marketing team at CodeSignal would like to know how many users there are in each Coding Score range, 
so that they can share that information on our website. They've asked you to create a report containing that information.

Your Mission

As input, you are given a list of scores. 

Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:

Poor: 300-599
Fair: 600-699
Good: 700-749
Excellent: 750-799
Elite: 800+
Calculate how many users are there in each level, 
then return a list of strings where each string represents a level and a number of users within that level, 
formatted like LevelName - Number. 

The levels should be sorted in decreasing order of those numbers, 
omitting any levels that have no users. 

In case of a tie, the higher level should appear first.

For example, if you had this input...

  [330, 723, 730, 825]
...then you should return the following:

[
  'Good - 2',
  'Elite - 1',
  'Poor - 1'
]

[execution time limit] 4 seconds (js)

[input] array.integer scores

[output] array.string

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/


const input = [330, 723, 730, 825]

const output = [
  'Good - 2',
  'Elite - 1',
  'Poor - 1'
]

function codingScoreReport(scores) {

}

console.log(codingScoreReport(input), output)

// Job Queue
/*Codewriting

Background

While working on our application servers, 
we realized that sometimes we have a long list of 
asynchronous network requests that need to be resolved in a specific, sequential order.

As a result, we want to create a job queue that can accumulate asynchronous jobs, then process them one at a time.

Requirements

Your job is to write a JavaScript module that exports a function createJobQueue, which creates an asynchronous job queue.

This job queue should have 3 methods:

addJob(job: () => Promise<mixed>): Promise<mixed>

cancelJob(job: () => Promise<mixed>): void

processAllJobs(): Promise<number>
addJob adds a job to the end of the queue. 
It should return a promise that resolves with the value returned by job, 
whenever job ends up getting executed. 

(But, note that addJob itself should not trigger execution of any jobs.) 
If job throws an error, then the promise returned by addJob should be rejected.

cancelJob removes a job from the queue. This should reject the promise returned by addJob. 
If no matching job is found, it does nothing.

When processAllJobs is called, the queue should process jobs (by invoking them) one-at-a-time in 
FIFO order until there are none left, then resolve with the number of jobs successfully processed 
(i.e., that did not reject or throw an error).

If any job cannot be processed -- because job rejects or throws an error when invoked -- 
the promise returned by addJob should be rejected. 
However, this should not stop processAllJobs from processing the rest of the queue.

For simplicity:

Assume that addJob and cancelJob will not be called while processAllJobs is in progress.
Assume that the same job will not be added to the queue more than once.
Hints

Your code will be scored by the unit tests in tests.js (this file is visible but read-only)
If it is helpful, you can write your own unit tests in customTests.js
To debug, you can see the raw Node/Mocha output by choosing Run Without Tests and runn
*/

function createJobQueue() {
  // TODO - create and return a job queue
}

module.exports = { createJobQueue }
