/*
At any time, get the average time between two stations
cardSwiped(cardId, time, station) 
    cardId: int
    time: int // start or end time
    station: string // station name where swipe occurs
    
averageTravelTime(station1, station2)
    returns int 
    

Time O(1)  adding to hashTable
Space O(n) all travel times given

userId {
 1: [[00:00, 1], [01:00, 3]], // 1 -> 3
 5: [[], {time: 14:00, station: 2}, {time: 15:00, station 1}] // 3 -> 2, 1 -> 
}

If the length of our value in userId is even, then we can calulate our travel times

global travel times
totalTimes
sum

{
  1 -> 2: totalTimes = 4, sum = 40  + 10
  2 -> 3: [7, 10, 8],
  3 -> 1: [15, 16, 17]
}

avg = 30 / 3 = 10
avg = 40 / 4 = 10

1 -> 2 15 mins
2 -> 3 30 mins
1 -> 3 20 mins

Create tranStation class function
global travel times 

  cardSwiped()
add

  averageTravelTime()
accumulate the sum of all intergers and then 
divide our times by the length our our key in hashTable
*/
