function findGrantsCap(grants, newBudget) {
  grants.sort((a,b) => a - b)
  let minBud = newBudget / grants.length
  
  for (let i = 0; i < newBudget; i++) {
    console.log('minBud', minBud)
    
    if (grants[i] >= minBud) {
      grants[i] = minBud
      newBudget -= minBud
    } else {
      
      newBudget -= grants[i]
      minBud = newBudget / (grants.length - (i + 1))
    }
  }
    
  console.log('grants', grants)
  return minBud
}

const grants1 = [2, 100, 50, 120, 1000]
// console.log(findGrantsCap(grants1, 190), 47)
 
const grants2 = [2,4,6]
console.log(findGrantsCap(grants2, 3), 1)

/*
Time O(n log n)
Space O(1)

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
           
minBudget = 190 / grantsArray.length = 38

minBudget = 188 / 4 = 47

Iterate over our grants Array and if an element is less than
our minbudget, then we can decrement it from our newBudget
otherwise, reassign or reallocate budget to our minBudget prices

 0,   1,  2,   3,  4,  5 index
[2, 100, 50, 120, 1000]
[2, 50, 100, 120, 1000]

idx 0, substract 2 from newBudget, newBud = 188
idx 1, over min, reassign to 47
rest of idx are over 47, so reassign

return our last element in our grants array
*/
