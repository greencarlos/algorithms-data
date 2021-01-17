const schedules1 = [[9, 5], [29, 5]]
// make sure times don't conflict
const meeting1 = [20, 5] // true
const meeting2 = [50, 10] // false

const overlapTime = (currS, newS, seen) => {
  const currStart = currS[0]  
  const currEnd = currS[0] + currS[1]

  const newStart = newS[0]
  const newEnd = newS[0] + newS[1]

  for (let i = currStart + 1; i < currEnd; i++) {
    seen.add(i)
  }

  for (let i = newStart + 1; i < newEnd; i++) {
    console.log(seen.has(i), 'seen', i, seen)
    if(seen.has(i)) {
      return true 
    }
  }
  return false 
}

const solution = (meetings, newMeeting) => {
  meetings.sort((a,b) => a[0] - b[0])
  const visited = new Set()

  for (let meeting of meetings) {
    if (overlapTime(meeting, newMeeting, visited)) {
      console.log('visit', visited)
      return false 
    }
  }
  return true 
}

console.log(solution(schedules1, meeting1), true)
console.log(solution(schedules1, meeting2), false)
