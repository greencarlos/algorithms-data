// Question 2): Given a value N, if we want to make change
// for N cents, and we have infinite supply of coins in
// 100, 50, 25, 10, 5, and 1 cents. You can exchange N with these coins.
// Find the minimum number of coins needed for the change.
// Example:
// console.log(changeMaking(100)); // 1
// console.log(changeMaking(101)); // 2

const solution = (num) => {
  if (num < 0) return 0
  let count = 0
  let coins = [100, 50, 25, 10, 1]
  
  for (let i = 0; i < coins.length; i++) {
  if (num % coins[i]) {
    num -= coins[i]
   count++
    }
  }
  return count
}

console.log(solution(100), 1); // 1
console.log(solution(101), 2); // 2
console.log(solution(10), 1); // 1
console.log(solution(12), 3); // 3
console.log(solution(15), 2); // 2

/*
count += Math.floor(num/coins[i])
num = num%coins[i]	
*/


const changeMaking = () => {}


console.log(changeMaking(100)); // 1
console.log(changeMaking(101)); // 2
console.log(changeMaking(10)); // 1
console.log(changeMaking(12)); // 3
console.log(changeMaking(15)); // 2

