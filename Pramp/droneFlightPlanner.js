/*
[x,   y,  z]
[0,   2, 10],
[3,   5,  0], start curr = 10, min = 0 curr += A[i-1] - A[i] curr = 10
[9,  20,  6], 10 - 6, curr = 4, min = 0  curr -= A[i] - A[i-1] curr = 4 
[10, 12, 15], 15 - 4, curr = 11 curr = 4 - 15 - 6 = -5 if(Answer > curr) Answer = curr 
[10, 10,  8] ]
*/

function calcDroneMinEnergy(route) {
  let min = Infinity
  let curr = 0
  
  for (let i = 1; i < route.length; i++) {
    const [x, y, z] = route[i]
    

    if (route[i - 1][2] < z) {
     curr -= (z - route[i - 1][2])
    } else {
      curr += (route[i - 1][2] - z)
    }
    
    if (curr < min) {
      min = curr
    }
  }
  
  if(min < 0) {
    return Math.abs(min);
  }
  return 0; 
}

  const route1 = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]
  
console.log(calcDroneMinEnergy(route1), 5)


/*
Time O(n) n = elements in route
Space (1) two variable names

input:  route = 
[x,    y  z]
[0,   2, 10], 
[3,   5,  0], gain 10kwh, curr = 10
[9,  20,  6], lose 6kwh, curr = 4
[10, 12, 15], lose 9 kwh, curr = -5, min required, min = 5, curr = 0
[10, 10, 8]  gain 7 kwh, curr = 7

[x,    y  z]
[0,   2, 10], 
[3,   5,  0], gain 10kwh, curr = 10
[9,  20,  6], lose 6kwh, curr = 4
[10, 12, 15], lose 9 kwh, curr = -5, min = 5, curr = 0
[10, 10, 17]  lose 2 kwh, curr = -2, min = 7 required curr = 0

output: 5 # less than 5 k

Iterate over our route, create a curr energy 
and min required energy
check if our curr is less than our min

add to our min, the new smaller value less than 0

return min
*/
