const arr = ["work", "hard", "delay", "gratification", "no", "work", "no", "goal", "makes", "for", "no",
"Achievement", "delay"]

const solution = (arr, i = 0, obj = {}, max = arr[0]) => {
  if (i === arr.length){
       return arr.indexOf(max) // 4 
  }

  obj[arr[i]] = (obj[arr[i]] || 0) + 1
  if (obj[arr[i]] > obj[max]) {
    max = arr[i]
  }
  return solution(arr, i + 1, obj, max)
}

console.log(solution(arr))


// Jack's solution

function nearest (arr) {
 let minDistance = Number.MAX_VALUE;
 let recentIndexMap = {};

 for (let i = 0, l = arr.length; i < l; i++) {
   let key = arr[i];
   if (recentIndexMap.hasOwnProperty(key)) {
     let diff = i - recentIndexMap[key];

     if (diff < minDistance) {
       minDistance = diff;
  }
   }
  
   recentIndexMap[key] = i;

 }

 return minDistance;
}


console.log(nearest(arr))
