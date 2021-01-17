/*
const invert = (callback) => {
  return (num) => {
    for (let i = 1; i <= num; i++) {
      if (callback(i) === num) {
        return i
      }
    }
  }
}
*/

const invert = callback => {
  return (num) => {
    let left = 1
    let right = num

    while(left < right) {
      const mid = Math.floor((left + right) / 2)

      if (callback(mid) === num) {
        return mid
      } else if (callback(mid) < num) {
        left = mid + 1
      } else {
        right = mid 
      }
    }
  }
}


const add1 = (x) => x + 1
const mult2 = (x) => x * x

const func1 = invert(add1)
const result1 = func1(10)
console.log(result1, 9)

const func2 = invert(mult2)
const result2 = func2(25)
console.log(result2, 5)
