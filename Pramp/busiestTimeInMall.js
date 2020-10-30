function findBusiestPeriod(data) {
  let max = 0
  let curr = 0
  let busiest = data[0][0]
  
  for (let i = 0; i < data.length; i++) {
    const [time, visitors, action] = data[i]
    
    if (action == 1) {
      curr += visitors
    } else if (action == 0) {
      curr -= visitors
    }
    
    if ((data[i+1] !== undefined && data[i+1][0] !== time) || data[i + 1] === undefined) {
      if (max < curr) {
        max = curr
        busiest = time
      }
    }
  }
  
  return busiest
}


const data1 = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  1] ]

console.log(findBusiestPeriod(data1), 1487901211)


/*
Time O(n) elements in array
Space O(1) variables

curr = 0
max = 0
busiest = 0

input:  data = [ 
[1487799425, 14, 1], 14 enter, 14
[1487799425, 4,  0], 4 leave, 10
[1487799425, 2,  0], 2 leave, 8 in mall
curr = 8, max = 8

[1487800378, 10, 1], 8 enter, 18 in the mall
curr 18, total 18

[1487801478, 18, 0], 18 leaves, 0
[1487801478, 18, 1], 18 enter, 18 in the mall
curr 18, max 18

[1487901013, 1,  0], 1 leave, 17 in the mall
curr 17, max 18

[1487901211, 7,  1], 7 enter, 24 in mall
[1487901211, 7,  0]  7 leave, 17 in the mall
curr 17, max 18
]

Iterate over the array, grab the [time, visitors, action] 
depending on the action we add or subtract from our curr

0 -> leave
1 -> enter

then we can check if our current time doesn't match our next
time then we can check if our curr is greater our max
is it is reassign our max and busiest time

return our busiest time

output: 1487800378 # s
*/
