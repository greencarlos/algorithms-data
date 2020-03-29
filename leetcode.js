var numTeams = function(rating) {
  const result = []

  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      for (k = j + 1; k < rating.length; k++) {
        if (rating[i] < rating[j] < rating[k] || 
          rating[i] > rating[j] > rating[k]) {
          result.push([rating[i], rating[j], rating[k]])
        }
      }
    }
  }

  console.log(result, 'result')
  return result.length 
};

/*
Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).

A team is valid if:  
(rating[i] < rating[j] < rating[k]) or 
(rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
*/

const rating1 = [2,5,3,4,1]
const rating2 = [2,1,3]
const rating3 = [1,2,3,4]

console.log(numTeams(rating1), 3)
console.log(numTeams(rating2), 0)
console.log(numTeams(rating3), 4)
