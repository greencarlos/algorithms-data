function meetingPlanner(slotsA, slotsB, dur) {
  let pA = 0
  let pB = 0

  while(pA < slotsA.length && pB < slotsB.length) {
    const maxStart = Math.max(slotsA[pA][0], slotsB[pB][0])
    const minEnd = Math.min(slotsA[pA][1], slotsB[pB][1])
    const meeting = maxStart + dur

//    console.log(maxStart, meeting, minEnd)
    if (meeting <= minEnd) {
      return [maxStart, meeting]
    } else if (slotsA[pA][1] > slotsB[pB][1]) {
      pB += 1
    } else {
      pA += 1
    }
  }
  
  return []
}



const slotsA1 = [[10, 50], [60, 120], [140, 210]]
const slotsB1 = [[0, 15], [60, 70]]

const slotsA2 = [[10, 50], [60, 120], [140, 210]]
const slotsB2 = [[0, 15], [60, 70]]

const slotsA3 = [[6,12]]
const slotsB3 = [[2,11]]


console.log(meetingPlanner(slotsA1, slotsB1, 8), [60, 68])
console.log(meetingPlanner(slotsA2, slotsB2, 12), [])
console.log(meetingPlanner(slotsA3, slotsB3, 5), [6, 11])

/*

Two Pointer approach
pA = pointer A
pB = pointer B

iterate over slotsA and slotsB, try to grab the 
maxmimum start for both elements and the minimum ends
grab our meeting by adding the max start to duration

 
 if there is not overloap return [max start, dur + max start]
 otherwise keep iterating over the slots depending on end time

if we never hit a meeting return empty array
*/
