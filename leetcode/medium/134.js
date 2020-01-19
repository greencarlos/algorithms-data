// https://leetcode.com/problems/gas-station/

/*
Example 1:
Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]
Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

Example 2:
Input: 
gas  = [2,3,4]
cost = [3,4,3]
Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
*/

// 1. update position if currennt tank < 0
// 2. check if total tank < 0
// 3. When total tank is positive, it means we have enough gas to 
// cover all the previous paths
var canCompleteCircuit = function(gas, cost) {
  let curTank = 0;
  let totalTank = 0;
  let pos = 0;

  for (let i = 0; i < gas.length; i++) {
    curTank += gas[i] - cost[i]
    totalTank += gas[i] - cost[i]
    if (curTank < 0) {
      curTank = 0;
      pos = i + 1
    }
  }
  return totalTank < 0 ? -1 : pos;
};

const gas1  = [1,2,3,4,5]
const cost1 = [3,4,5,1,2]
const gas2  = [2,3,4]
const cost2 = [3,4,3]

console.log(canCompleteCircuit(gas1, cost1), 3)
//console.log(canCompleteCircuit(gas2, cost2), -1)
