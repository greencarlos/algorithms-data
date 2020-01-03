// https://leetcode.com/problems/minimum-index-sum-of-two-lists/discuss/

/*
Suppose Andy and Doris want to choose a restaurant for dinner,
and they both have a list of favorite restaurants represented by strings.
You need to help them find out their common interest with the least list index sum. 

If there is a choice tie between answers, output all of them with no order requirement.
You could assume there always exists an answer.

Example 1:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

Output: ["Shogun"]

Explanation: The only restaurant they both like is "Shogun".

Example 2:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]

Output: ["Shogun"]

Explanation: The restaurant they both like and have
the least index sum is "Shogun" with index sum 1 (0+1).
*/

const arr1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
const arr2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
const output1 =["Shogun"]

const arr3 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
const arr4 = ["KFC", "Shogun", "Burger King"]
const output2 = ["Shogun"]

var findRestaurant = function(list1, list2) {
  const commonInterest = [];

  list1.forEach((res, index1) => {
    const index2 = list2.indexOf(res)

    if (index2 !== -1) {
      const indexSum = index1 + index2

      if (!commonInterest[indexSum]) commonInterest[indexSum] = []
      commonInterest[indexSum].push(res)
    }
  })

  for (let i = 0; i < commonInterest.length; i++)
    if (commonInterest[i]) return commonInterest[i]
}

console.log(findRestaurant(arr1, arr2), output1)
console.log(findRestaurant(arr3, arr4), output2)
