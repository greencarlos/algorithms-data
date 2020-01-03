// https://leetcode.com/problems/house-robber-ii/

/*
Input: [2,3,2]
Output: 3
Explanation: 
You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
because they are adjacent houses.

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/

const rob = function(nums) {
  const robPlan = function(nums, s, e) {
    let preMax = 0, curMax = 0;
    for (let i = s; i < e; i++) {
      let temp = curMax;
      curMax = Math.max(curMax, preMax+nums[i])
      preMax = temp
    }
    return curMax
  }

  if (nums.length == 1) return nums[0]
  if (nums.length < 1 || nums == null) return 0

  let start0 = robPlan(nums, 0, nums.length - 1)
  let start1 = robPlan(nums, 1, nums.length)
  return Math.max(start0, start1)
}

const input1 = [2,3,2]
const input2 = [1,2,3,1]

console.log(rob(input1), 3)
console.log(rob(input2), 4)
